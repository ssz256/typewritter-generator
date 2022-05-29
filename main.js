const DEBUG = false;

let typewritter = document.getElementsByClassName("typewritter")[0];
typewritter.innerText = "";

let args = window.location.search.substring(1, window.location.search.length)

while (args.replace("%20", " ") != args) {
    args = args.replace("%20", " ");
}

const sentences = args.split("&&&");

/*const sentences = ["Testing...",
    "Testing Python",
    "Testing c++",
    "Testing html"];*/

let actions = [];
for (let i = 0; i < sentences[0].length; i++) {
    actions.push(sentences[0][i])
}
for (let i = 0; i < sentences.length - 1; i++) {
    for (let j = 0; j < 10; j++) {
        actions.push(undefined);
    }
    let b = i + 1;
    s = "";
    for (let j = 0; j < sentences[b].length; j++) {
        if (sentences[i][j] == sentences[b][j]) {
            s += sentences[b][j];
        }
        else {
            break;
        }
    }
    let fff = false;
    for (let j = 0; j < sentences[i].length; j++) {
        if (sentences[i][j] != sentences[b][j] || fff) {
            actions.push("backspace");
            fff = true;
        }
    }
    for (let i = 0; i < sentences[b].length; i++) {
        if (s[i] != sentences[b][i]) {
            actions.push(sentences[b][i]);
        }
    }
}
for (let j = 0; j < 10; j++) {
    actions.push(undefined);
}
for (let i = 0; i < sentences[sentences.length - 1].length; i++) {
    actions.push("backspace");
}

let i = 0;
setInterval(function () {
    if (DEBUG) console.log("tick");
    if (actions[i] == "backspace") {
        if (DEBUG) console.log("backpace");
        typewritter.innerText = typewritter.innerText.slice(0, -1);
    } else if (actions[i] == " ") {
        typewritter.innerText += " ";
    }
    else if (actions[i] == undefined) {

    }
    else {
        typewritter.innerText += actions[i];
    }
    i++;
    if (i >= actions.length)
        i = 0;
    if (typewritter.innerText.length < 1)
        typewritter.innerText = "‌";
}, 100)

if (DEBUG) console.log(actions);