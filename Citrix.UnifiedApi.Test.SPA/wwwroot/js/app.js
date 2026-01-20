// Copyright © 2026. Cloud Software Group, Inc. All Rights Reserved.

// In a production service, this should this should be pulled in from another source, such as a configuration file, environment variable, or other secure location
const APPLICATION_ID = ""

// Creates an axios instance for calling the Citrix API that handles retrieving tokens
function CreateApiHandler(baseUrl, tmsBaseUrl, requestVerifyToken) {
    // access token and other details stored in memory within a private function
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures
    let token = null

    let promiseForToken = null
    let refreshTime = -1;

    // Retrieve token from TMS (if needed)
    async function RetrieveToken() {

        async function RetrieveTokenDo() {
            let tokenResponse = await axios({
                headers: { 'RequestVerificationToken': requestVerifyToken },
                method: 'post',
                url: `${tmsBaseUrl}/Session/RetrieveToken`,
                withCredentials: true
            })

            let expiresIn = tokenResponse.data.expiresIn - 60
            refreshTime = Date.now() + (expiresIn) * 1000
            token = tokenResponse.data.accessToken
            return token
        }

        if (Date.now() >= refreshTime || promiseForToken == null) {
            refreshTime = Date.now() + 30000
            promiseForToken = RetrieveTokenDo();
        }
        return await promiseForToken;
    }

    const axiosInstance = axios.create({
        baseURL: baseUrl,
    });

    // Interceptor for retrieving and adding token to Auth header
    axiosInstance.interceptors.request.use(async function (config) {
        const token = await RetrieveToken()
        config.headers["Citrix-ApplicationId"] = APPLICATION_ID
        if (token) {
            config.headers["Authorization"] = "Bearer " + token
        }
        return config;
    })

    return axiosInstance
}

var apiHandler = null

window.addEventListener('load', async () => {
    const el = $('#app');

    // Load html templates
    const errorTemplate = $('#error-template').html();
    const loadingTemplate = $('#loading-template').html();
    const resourcesTemplate = $('#resources-template').html();
    const signInTemplate = $('#signin-template').html();

    // Show the loading page
    el.html(loadingTemplate);

    try {
        const tmsBaseUrl = "https://localhost:7182"
        const sessionState = await axios.get(`${tmsBaseUrl}/Session/CheckSession`, { withCredentials: true })
        
        if (sessionState.data.isLoggedIn) {
            apiHandler = CreateApiHandler(`https://${sessionState.data.workspaceDomain}/citrixapi`, tmsBaseUrl, sessionState.data.requestVerificationToken)

            let discoveryResponse = await apiHandler.get(`https://${sessionState.data.workspaceDomain}/citrixapi/discovery/configurations`)

            let resourcesListUrl = new URL(discoveryResponse.data.services.find(service => service.service === "store").endpoints.find(endpoint => endpoint.id === "ListResources").url)

            resourcesListUrl.searchParams.append('acceptCachedResults', 'true');

            let resourcesResponse = await apiHandler.get(
                resourcesListUrl
            );

            let template = Handlebars.compile(resourcesTemplate)

            let resourceTable = template(resourcesResponse.data)
            el.html(resourceTable);
        } else {
            // Show the sign in page
            el.html(signInTemplate);
        }
    } catch (err) {
        // Show an error page
        el.html(errorTemplate);
        throw err
    }
})

let launching = false
async function PerformLaunch(card) {
    if (launching) {
        return;
    }

    try {
        $(card).children(".loader").addClass('active')
        launching = true;
        const resourceLinks = card.dataset
        
        const launchType = document.getElementById('launch-type').value
        switch (launchType) {
            case "Receiver": {
                await launchReceiver(resourceLinks.icafilefetchticketurl)
                break;
            }
            case "HTML5": {
                await launchHTML5(resourceLinks.icafileurl)
                break;
            }
            case "IFrame": {
                await launchIFrame(resourceLinks.icafileurl)
                break;
            }
        }
        
    }
    finally {
        launching = false;
        $(card).children(".loader").removeClass('active')
    }
}

async function launchReceiver(launchUrl) {
    let launchTicketResponse = await apiHandler.get(launchUrl)

    let receiverUri = launchTicketResponse.data.receiverUri
    window.open(receiverUri, "Launching...")
}

// Keep reference to session object to prevent premature cleanup
let html5SessionObject = null;

async function launchHTML5(launchUrl) {
    let icaFile = await apiHandler.get(launchUrl)
    const sessionId = "html5"
    const connectionParams = {
        "launchType": "newtab",
        "container": {
            "type": "window"
        }
    };

    function sessionCreated(sessionObject){
        // Store session object reference to prevent garbage collection
        html5SessionObject = sessionObject;
        
        // Adding onConnection event handler
        function connectionHandler(event) {
            console.log("Event Received : " + event.type);
            console.log(event.data);
        }
        sessionObject.addListener("onConnection", connectionHandler);

        // Adding onConnectionClosed event handler
        function connectionClosedHandler(event) {
            console.log("Event Received : " + event.type);
            console.log(event.data);
            // Clear session reference on close
            html5SessionObject = null;
        }
        sessionObject.addListener("onConnectionClosed", connectionClosedHandler);

        // Adding onError event handler
        function onErrorHandler(event) {
            console.log("Event Received : " + event.type);
            console.log(event.data);
        }
        sessionObject.addListener("onError", onErrorHandler);

        // Adding onURLRedirection event handler
        function onURLRedirectionHandler(event) {
            console.log("Event Received : " + event.type);
            console.log(event.data);
        }
        sessionObject.addListener("onURLRedirection", onURLRedirectionHandler);

        const launchData = { "type": "ini", "value": icaFile.data };
        sessionObject.start(launchData);
    }
    try {
        citrix.receiver.setPath("CDN");
        citrix.receiver.createSession(sessionId, connectionParams, sessionCreated);
    } catch (ex) {
        console.log(ex)
    }
}
// Keep reference to iframe session object to prevent premature cleanup
let iframeSessionObject = null;

async function launchIFrame(launchUrl) {
    let icaFile = await apiHandler.get(launchUrl)
    const id = "iframe"
    const connectionParams = {
        "launchType": "embed",
        "container": {
            "type": "iframe",
            "id": "sessionIframe"
        }
    };
    
    document.getElementById("sessionIframe").style.display = "block";

    function sessionCreated(sessionObject){
        // Store session object reference to prevent garbage collection
        iframeSessionObject = sessionObject;

        // Adding onConnection event handler
        function connectionHandler(event) {
            console.log("Event Received : " + event.type);
            console.log(event.data);
        }
        sessionObject.addListener("onConnection", connectionHandler);

        // Adding onConnectionClosed event handler
        function connectionClosedHandler(event){
            console.log("Event Received : " + event.type);
            console.log(event.data);
            document.getElementById("sessionIframe").style.display = "none";
            // Clear session reference on close
            iframeSessionObject = null;
        }
        sessionObject.addListener("onConnectionClosed", connectionClosedHandler);

        // Adding onError event handler
        function onErrorHandler(event) {
            console.log("Event Received : " + event.type);
            console.log(event.data);
        }
        sessionObject.addListener("onError", onErrorHandler);

        // Adding onURLRedirection event handler
        function onURLRedirectionHandler(event) {
            console.log("Event Received : " + event.type);
            console.log(event.data);
        }
        sessionObject.addListener("onURLRedirection", onURLRedirectionHandler);

        const launchData = {"type": "ini", "value": icaFile.data};
        sessionObject.start(launchData);
    }
    try {
        citrix.receiver.setPath("CDN");
        citrix.receiver.createSession(id, connectionParams, sessionCreated);
    } catch (ex) {
        console.log(ex)
    }
}