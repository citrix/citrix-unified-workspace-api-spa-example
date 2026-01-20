/*Copyright (c) 2010 - 2025 Citrix Systems, Inc.All Rights Reserved. Confidential & Proprietary.
The materials in this file are protected by copyright and other intellectual property laws.
Copying and use is permitted only by end users to enable use of Citrix server technology.
Any other reproduction or use of this file, or any portion of it, is unlicensed.
In no event may the file be reverse engineered or may copies be made in association with deobfuscation, decompilation or disassembly.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

var HDXLauncher = (function(){

	function loadStyleSheet(path) {
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = path;
		link.media = 'all';
		head.appendChild(link);
	}

	function addScriptWithSRI(filelist, onSuccessCallback, onErrorCallback) {

		var loadedFileCount = 0;
		var totalFileCount = filelist.length;
		var errorStatus = false;

		function onload() {
			loadedFileCount ++;
			if(totalFileCount === loadedFileCount) {
				errorStatus ? onErrorCallback() : onSuccessCallback();
			}
		}
		function onLoadSuccess() {
			onload();
		}

		function onLoadError() {
			errorStatus = true;
			onload();
		}

		for(var i = 0; i < totalFileCount; i++) {
			var script = document.createElement('script');
			script.src = filelist[i];
			script.async = false;
			script.onload = onLoadSuccess;
			script.onerror = onLoadError;
			var fileName = script.src.split("/");
			fileName = fileName[fileName.length-1];
			if(typeof globalThis["SRIOfScripts"] !== "undefined" && globalThis["SRIOfScripts"][fileName]){
				script["integrity"] = globalThis["SRIOfScripts"][fileName];
				script["crossOrigin"] = "anonymous";
			}
			document.body.appendChild(script);
		}
}

if(typeof window != "undefined" )
{		
		var engine;
		var eventArray = new Array(0);		
		globalThis["clientURL"] = "";
		globalThis["RELATIVE_SOURCE_PATH"] = {
			'filepath' : "src/",                          // src folder path
			'imagepath' : "resources/",                   // resources folder path
			'localizationpath' : "locales/",              // locales folder path
			'thirdpartypath' : "ThirdPartyLibrary/",       // 3rd party lib path
			'workerpath' : "./HDXLauncher.js",  // main launcher path for worker
			'csspath' : "CascadingStyleSheet/",             // css folder path
		    'ui': 'UI/'                                      // launch file loaders path
        };
  		window.configurationPath = "";
		var sessionId;
		var engineType;
		var preferredLang;
		window.isSDK = true;
		var selfDomain = window.location.origin ? window.location.origin : (window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : ''));
		var fallbackEnginePath="";

		//sets the 'clientURL' based on underlying browser. Loading engine, even if we fail to check browser
		function loadLegacyOrModernEngine() {
			loadStyleSheet(globalThis["clientURL"] + globalThis["RELATIVE_SOURCE_PATH"]['csspath'] +"ctxs.launcherUI.css");
            var filesList = [
				globalThis["clientURL"] + "Common/LocalStorage.js",
				globalThis["clientURL"] + "src/Business/Logger/log.js",
                globalThis["clientURL"] + globalThis["RELATIVE_SOURCE_PATH"]['ui'] + "LaunchUiLoader.js",
                globalThis["clientURL"] + globalThis["RELATIVE_SOURCE_PATH"]['filepath'] + "IcaFileLoader.js",
                globalThis["clientURL"] + "AppVariableScope/ScopeDeclaration.js",
                globalThis["clientURL"] + "src/LegacyBrowserCheck.js"
            ];
			addScriptWithSRI(filesList, function () {
				LegacyBrowserCheck.isLegacyBrowser(globalThis["clientURL"], addScriptWithSRI, async function (result) {
					if(result) {
						console.error(" Browser detected as unsupported browser , Please upgrade to a supported browser or use a compatible one.refer : https://docs.citrix.com/en-us/citrix-workspace-app-for-html5/system-requirements#browsers");
						if(engineType === 'HTML5Engine') {
							closeHTML5Session();
						}
						return;
					}
					await getIcaData();
					loadEngine(globalThis["clientURL"]);
				});
			}, async function (err) {
				console.log("HDXLauncher : Unable to check if browser is legacy, assuming it's a modern browser", err);
				await getIcaData();
				loadEngine(globalThis["clientURL"]);
			});
		}

		async function getIcaData() {
			let icaLoader = globalThis["ICA_LOADER"];
			let featureFlagObj = await globalThis["LOCAL_STORAGE"]["localStorage"]["getItemPromise"]('launchUiImprovement');
			globalThis["LAUNCH_UI_LOADER"]["isFeatureEnabled"] = globalThis["LAUNCH_UI_LOADER"]["evaluateLauncherFeatureFlag"](featureFlagObj);
			if (globalThis["LAUNCH_UI_LOADER"]["isFeatureEnabled"] && engineType === 'HTML5Engine') {
				let ajaxHeader = {};
				let icaParams = {};
				icaLoader["parseUrlParams"](icaParams, ajaxHeader);
				icaParams["eventArray"] = eventArray;
				icaLoader["getIcaData"](icaParams, ajaxHeader);
			} else {
				// Setting the featureflag as false to prevent any other calls to LAUNCH_UI_LOADER
				globalThis["LAUNCH_UI_LOADER"]["isFeatureEnabled"] = false;
				globalThis["LAUNCH_UI_LOADER"]["ui"]["hide"]();
			}
		}

		function startHTMLSession( ){
			engine = new HTML5Engine();
			engine.setConfigurationPath(window.configurationPath);
			engine.setSessionId(sessionId);
			engine.setParameter({
					'sourcecode' : {
						'filepath' : globalThis["clientURL"]+ globalThis["RELATIVE_SOURCE_PATH"]['filepath'],                          // src folder path
						'imagepath' : globalThis["clientURL"]+globalThis["RELATIVE_SOURCE_PATH"]['imagepath'],                   // resources folder path
						'localizationpath' : globalThis["clientURL"]+globalThis["RELATIVE_SOURCE_PATH"]['localizationpath'],              // locales folder path
						'thirdpartypath' : globalThis["clientURL"]+globalThis["RELATIVE_SOURCE_PATH"]['thirdpartypath'],       // 3rd party lib path
						'workerpath' : globalThis["RELATIVE_SOURCE_PATH"]['workerpath'],  // main launcher path for worker
						'csspath' : globalThis["clientURL"]+globalThis["RELATIVE_SOURCE_PATH"]['csspath']             // css folder path
					}
            });
			
			engine.setParameter({'ui':{'root':"citrixuiElement"}});
			engine.setParameter({'ica':{'type':"unknown"}});

			//To translate based on the browser's langugage
			var lang = (!preferredLang)?navigator.language : preferredLang;
			if(lang==null || lang==undefined){
				lang = navigator.browserLanguage; //IE 10 returns navigator.language as undefined.
			}
			engine.setParameter({'preferences' : {'lang' : lang }});			

			engine.initEngine( );
			if(eventArray.length > 0){
				engine.handleMessage(eventArray, eventArray.length);
				eventArray = new Array(0);
			}			
		}
		//If SessionWindow.js file is not reachable then throw onConnectionClosed event
		function closeHTML5Session(){
			var parentWindow = (window.opener || window.parent);
			if(parentWindow){
				parentWindow.postMessage({"type":"onConnectionClosed","sessionId": sessionId,"data":"UNREACHABLE_CLIENT","source":"HTML5Client"},selfDomain);				
			}			
			window.close();
		}
		
		function openLogPage(){
			var uiElement = document.getElementById("citrixuiElement");
			uiElement.parentElement.removeChild(uiElement);			
			
			loadDependentFiles({
				'sourcecode' : {
					'localizationpath' : globalThis["clientURL"]+globalThis["RELATIVE_SOURCE_PATH"]['localizationpath'],              // locales folder path
					'thirdpartypath' : globalThis["clientURL"]+globalThis["RELATIVE_SOURCE_PATH"]['thirdpartypath'],       // 3rd party lib path
					'csspath' : globalThis["clientURL"]+globalThis["RELATIVE_SOURCE_PATH"]['csspath']             // css folder path
				}
            });
		}
		
		function loadEngine(clientURL){
			
			switch(engineType){
				case 'HTML5Engine' :
									addScriptWithSRI([clientURL + "src/SessionWindow.js"], startHTMLSession, function(){
										if(fallbackEnginePath){
											globalThis["clientURL"] = fallbackEnginePath;
											window.configurationPath = globalThis["clientURL"];
											fallbackEnginePath = "";
											globalThis["SRIOfScripts"] = {};//Resets the checksum as of CDN
											loadLegacyOrModernEngine();

										}else{
											closeHTML5Session();
										}
									});
									break;
				case 'log':			addScriptWithSRI([clientURL + "src/Business/Logger/log.js"], openLogPage, function(){
										if(fallbackEnginePath){
											globalThis["clientURL"] = fallbackEnginePath;
											window.configurationPath = globalThis["clientURL"];
											fallbackEnginePath = "";
											loadLegacyOrModernEngine();
										}else{
											window.close();
										}
									});
									break;
				case 'displayWindow' : //Do nothing added as placeholder to handle anything in future if required
									break;
				default : 
						console.log("Unrecognized engine type");
						break;
			}
		}	
		//Fetch the Subresource Integrity for all the obfuscated scripts
		function getSRIForScripts(cb){
			if(globalThis["clientURL"] && globalThis["clientURL"].indexOf("html5cdn.cloud.com") !==-1){
				addScriptWithSRI([globalThis["clientURL"] + "SRI.js"], cb, function(){
					console.log("Unable to fetch Check sum file - CDN not reachable");
					globalThis["SRIOfScripts"] = {};
					if(fallbackEnginePath){
						globalThis["clientURL"] = fallbackEnginePath;
						window.configurationPath = globalThis["clientURL"];
						fallbackEnginePath = "";
						console.log("Using fallbackEnginePath set by customer");
						loadLegacyOrModernEngine();
					}else{
						closeHTML5Session();
					}					
				});
			}else{
				//Adding SRIOfScripts only for files fetched from CDN.
				globalThis["SRIOfScripts"] = {};
				cb();
			}			
		}

		function processPostMessage(event) {
			if (event.origin === selfDomain) {
				if (event.data && event.data["cmd"] === "ClientURL") {
					const sdkVersion = event.data["SDKVersion"];
					// storing this in the global scope to be used in the engine, for AOT logging and CEIP
					globalThis["Html5SDKVersion"] = sdkVersion;
					globalThis["clientURL"] = event.data["url"];
					window.configurationPath = globalThis["clientURL"];
					sessionId = event.data["sessionId"];
					preferredLang = event.data["preferredLang"];
					fallbackEnginePath = event.data["fallbackEnginePath"];
					getSRIForScripts(function () {
						loadLegacyOrModernEngine();
					});
				}
				if (event.data && event.data["cmd"] && event.data["cmd"].toLowerCase() === "config") {
					// This is storing here to reuse it in the launcher Ui loader cancel button action
					globalThis["LAUNCH_DATA"] = {
						"redirectUrl": event.data["config"] && event.data["config"]["window"] ? event.data["config"]["window"]["redirecturl"] : ""
					};
				}
				if (engine) {
					engine.handleMessage(event);
				} else {
					eventArray[eventArray.length] = event;
				}
			}
		}

		// To be used when posting ICA data via message to HTML5 Workspace app
		window.addEventListener("message", processPostMessage , false);
		
		window.onload=function(e){
			var parentWindow = (window.opener || window.parent);
			if(parentWindow){
				var locationParams = (location.href.split('?').length > 1 ) ? location.href.split('?')[1].split('&') : location.href.split('?')[0];
				var key_Values = locationParams[0].split('#');				
				
				if(key_Values){
					//Fetching the launchId
					for (var i = 0; i < key_Values.length; i++) {
						let key_Value = key_Values[i].split("=");
						if (key_Value.length == 2 && key_Value[0] === "launchid"){						
							parentWindow.postMessage({"cmd":"WINDOWLOADED","data":{"launchid": key_Value[1]},"source":"HTML5Client"},selfDomain);
							break;
						}
					}	
				}
				
				if(locationParams[1]){
					//Fetching the engineType
					let key_Value = locationParams[1].split("=");
					if (key_Value.length == 2 && key_Value[0] === "engineType"){					
						engineType = key_Value[1];												
					}				
				}
			}
		}
  
}else{
	globalThis["HTML5LocationParam"] = {};
	(function() {
		var key_Values = location.href.split('?')[1].split('&');
		for (var i = 0; i < key_Values.length; i++) {
			let key_Value = key_Values[i].split("=");
			if (key_Value.length == 2)
				globalThis["HTML5LocationParam"][key_Value[0]] = key_Value[1];
		}
	})();
	importScripts(globalThis["HTML5LocationParam"]["filepath"] + "workerhelper.js");
}

	var isUT = ((typeof dependency) !== "undefined") && dependency.testEnv;
	
})();
