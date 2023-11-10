console.log("content script loaded")

let intId = null
window.addEventListener('load', function () {
    intId = setInterval(checkIsBlocked, 1000)
})

function checkIsBlocked() {
    let enforcement = window.document.querySelector("ytd-enforcement-message-view-model.style-scope.yt-playability-error-supported-renderers");
    if (enforcement) {
        (async () => {
            const response = await chrome.runtime.sendMessage({});
        })();
        history.back()
        // clearInterval(intId)
    }
}
