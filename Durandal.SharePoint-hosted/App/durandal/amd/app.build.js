{
  "name": "durandal/amd/almond-custom",
  "inlineText": true,
  "stubModules": [
    "durandal/amd/text"
  ],
  "paths": {
    "text": "durandal/amd/text"
  },
  "baseUrl": "C:\\Projects\\Durandal.SharePoint-hosted\\Durandal.SharePoint-hosted\\App",
  "mainConfigFile": "C:\\Projects\\Durandal.SharePoint-hosted\\Durandal.SharePoint-hosted\\App\\main.js",
  "include": [
    "main",
    "durandal/app",
    "durandal/composition",
    "durandal/events",
    "durandal/http",
    "text!durandal/messageBox.html",
    "durandal/messageBox",
    "durandal/modalDialog",
    "durandal/system",
    "durandal/viewEngine",
    "durandal/viewLocator",
    "durandal/viewModel",
    "durandal/viewModelBinder",
    "durandal/widget",
    "durandal/plugins/router",
    "durandal/transitions/entrance",
    "viewmodels/flickr",
    "viewmodels/shell",
    "viewmodels/welcome",
    "text!views/detail.html",
    "text!views/flickr.html",
    "text!views/shell.html",
    "text!views/welcome.html"
  ],
  "exclude": [],
  "keepBuildDir": true,
  "optimize": "uglify2",
  "out": "C:\\Projects\\Durandal.SharePoint-hosted\\Durandal.SharePoint-hosted\\App\\main-built.js",
  "pragmas": {
    "build": true
  },
  "wrap": true,
  "insertRequire": [
    "main"
  ]
}