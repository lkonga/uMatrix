function whitelistAllButCookies(url) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0]
        var hostname = new URL(tab.url).hostname

        console.log(µMatrix)
        µMatrix.tMatrix.whitelistCell(hostname, "*", "css")
        µMatrix.tMatrix.whitelistCell(hostname, "*", "image")
        µMatrix.tMatrix.whitelistCell(hostname, "*", "media")
        µMatrix.tMatrix.whitelistCell(hostname, "*", "script")
        µMatrix.tMatrix.whitelistCell(hostname, "*", "xhr")
        µMatrix.tMatrix.whitelistCell(hostname, "*", "frame")
        µMatrix.tMatrix.whitelistCell(hostname, "*", "other")
    });
}

var onCommand = function(command) {
    switch ( command ) {
    case 'whitelist-all-but-cookies':
        whitelistAllButCookies();
        break;
    default:
        break;
    }
};

chrome.commands.onCommand.addListener(onCommand);
