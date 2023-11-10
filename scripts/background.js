chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        let tab = sender.tab;
        let url = tab.url + "&mode=theater";
        chrome.windows.create({ url: url, incognito: true});
    }
);
