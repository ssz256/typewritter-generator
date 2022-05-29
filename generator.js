function generate() {
    let text = document.getElementById("typewritterSentencesLength").value;
    while (text.replace("\n", "&&&") != text) {
        text = text.replace("\n", "&&&");
    }
    let url = window.location.protocol + "/" + window.location.host + "/" + window.location.pathname.split("/")[1] + "/typewritter.html?" + text;
    while (url.replace(" ", "%20") != url) {
        url = url.replace(" ", "%20");
    }
    let link = document.createElement("textarea");
    link.innerText = url;
    link.id = "link";
    link.cols = "50";
    link.rows = "5";
    document.getElementById("container").appendChild(link);

    document.getElementById("container").appendChild(document.createElement("br"));

    let button = document.createElement("button");
    button.innerText = "copy link";
    button.onclick = function () {
        //copy text to clipboard
        var textArea = document.getElementById("link");
        textArea.select();
        document.execCommand("copy");
    }
    document.getElementById("container").appendChild(button);
}