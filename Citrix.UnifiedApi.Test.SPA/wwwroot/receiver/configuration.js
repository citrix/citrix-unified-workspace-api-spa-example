/*Copyright (c) 2014 Citrix Systems, Inc.
The materials in this file are protected by copyright and other intellectual property laws.
Copying and use is permitted only by end users to enable use of Citrix server technology.
Any other reproduction or use of this file, or any portion of it, is unlicensed.
In no event may the file be reverse engineered or may copies be made in association with deobfuscation, decompilation or disassembly.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

var HTML5_CONFIG = {
	'type':'update',
	'vc_channel' : {
	},
	'userinput' : {
		'mousetimer' : '*'
	},
	'ceip' : {
		'enabled' : true,
		'timeSpan' : 7, //days between 1 and 7
		'productKey' : "PK 55347dc54403d457ba0a661042261add2ae0e2d9",
		'url' : "https://rttf.citrix.com/feeds/api/tuple/"
	},
	'ui' : {
		'toolbar' : {
			'menubar':true,
			'clipboard':true,
			'usb': false,
			'fileTransfer':true,
			'about':true,
			'lock':true,
			'disconnect':true,
			'logoff':true,
			'fullscreen':true,
			'keyboard':true,
			'multitouch':true,
			'switchApp':true,
			'preferences':true,
			'gestureGuide':true,
			'viewLogs':true,
			'multiMonitor' :true
		},
		"hide":{
			"urlredirection" : false,
			"error" : false,
			'ftu' : false,
			'printDialog': false
		},
		'sessionsize' : {
			'minwidth' : 240, 
			'minheight' : 120,
			'available' : {
				"default" : "Fit_To_Window",
				"values" : ["Fit_To_Window", "Use_Device_Pixel_Ratio","1280x800","1440x900","1600x1200"]	
			}
		},
		'appSwitcher': {
				'showTaskbar': true,
				'autoHide': false,
				'showIconsOnly': false
		},
		'handleMouseCursorUsingDivForIE' : true
	},
	'features' : {
		'seamlesswindow' : false,
		'seamlessclip' : true,
		'sessionsharing' : true,
		'icaConnectOnAppLaunchFail': true,
		'audio' : {
			'HTML5_Audio_Buffer_Duration' : 250,
			'HTML5_Audio_Lag_Threshold'	  :	250
		},
		'graphics' : {
			'jpegSupport' : true,
            'avoidCache' : true,
            'selectiveH264' : true,
            'useGlTexH264': true,
			'h264Support' : {
				'enabled' : true,
				'losslessOverlays' : true,
				'dirtyRegions' : true,
				'yuv444Support' : false
			},
            'noWaitForSpaceEx': false
		},
		'filetransfer' : {
			'allowupload' : true,
			'allowdownload' : true,
			'maxuploadsize'	: 2147483647,//2GB
			'maxdownloadsize' : 2147483647//2GB
		},
		'com':{
			'portname':"COM5"
		},
		'pdfPrinting':{
			'directPrint':{
				'supportedBrowsers':true, //Chrome,Firefox
				'IE':false
			}
		}
	},
	'domain' : {
		//'src':list of domain seperated by ;
		//'message':
	},
	'hardware' : {
		'webgl' : true
	},
	'transport' : {
		'outbufscountclient' : 88,
		'outbufscounthost' : 88,
		'cgpEnabled' : true
	},
	'other' : {
		'sec_protocol' : "",
		'workerdisable' : false,
		'h264nonworker' : false
	},
	'fpsMeter':{
		'visibility':false,
		'updateFrequency':0 // fps update frequence in secs
	},
	//Preferences for chrome app
	'appPrefs':{
		'chromeApp':{
			'ui' : {
				'toolbar' : {
					'menubar':true,
					'clipboard': false,
					'usb' : true,
					'fileTransfer':true
				},
				"sessionsize": {
            		"windowstate": "maximized"
        		},
				"netPromoters" : true
			},
			'ceip' : {
				'productKey': 'PK 653ddf5fb10fe0763a6ec9e7acf82a89d5a99e51'
			},
			'nacl' : {
                'supportNacl' : true,
                'graphics': {
                    'enable': true,
                    'config': {

                    }
                },
                'video': {
                    'enable': true,
                    'config': {

                    }
                },
                'audio': {
                    'enable': true,
                    'config': {

                    }
                }
			},
			'transport' : {
				'nativeSocket' : true
			},
			'features' : {
				'graphics' : {
					'multiMonitor': true
				},
				'multipleStores' : {
					'enable': true
				}
			},
			'smartcard' : {
				'managerappid' : 'khpfeaanjngmcnplbdlpegiifgpfgdco'
			},
			'uniqueID' : {
				'prefixKey' : "CR-",
				'restrictNameLength' : false
			},
			'seamless' : {
			},
			"customVC":[
				//{"appId":<VC_app_id1>, "streamName": <streamName1>},{"appId":<VC_app_id1>, "streamName": <streamName2>}					
			]				
		}
	}
};