/*
* Copyright © 2023. Cloud Software Group, Inc.
* This file is subject to the license terms contained
* in the license file that is distributed with this file.
*/

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
            apiHandler = CreateApiHandler(`https://${sessionState.data.workspaceDomain}/api`, tmsBaseUrl, sessionState.data.requestVerificationToken)

            let discoveryResponse = await apiHandler.get(`https://${sessionState.data.workspaceDomain}/api/discovery/configurations`)

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
async function PerformLaunch(card, launchUrl) {
    if (launching) {
        return;
    }

    try {
        $(card).children(".loader").addClass('active')
        launching = true;
        
        let launchTicketResponse = await apiHandler.post(launchUrl)

        let receiverUri = launchTicketResponse.data.receiverUri
        window.open(receiverUri, "Launching...")
    }
    finally {
        launching = false;
        $(card).children(".loader").removeClass('active')
    }
}
