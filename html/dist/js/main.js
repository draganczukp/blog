"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const config = {
    "links": {
        "Fun": {
            "YouTube": "https://youtube.com/feed/subscriptions",
            "Netflix": "https://netflix.com",
            "Reddit": "https://reddit.com",
            "Imgur": "https://imgur.com",
            "Twitter": "https://twitter.com",
            "Anime": "https://anime-odcinki.pl"
        },
        "Misc": {
            "GMail": "https://mail.google.com",
            "Cloud": "https://cloud.draganczuk.tk",
            "Messenger": "https://messenger.com"
        },
        "Studia": {
            "Materiały": "https://url.draganczuk.tk/materialy",
            "Plan": "http://www.plan.uz.zgora.pl/grupy_plan.php?pId_Obiekt=20885",
            "Egzaminy": "http://25infsp.tk/egzaminy.php",
            "Studnet": "https://webapps.uz.zgora.pl/studnet/"
        },
        "Dev": {
            "localhost:8000": "http://localhost:8000",
            "Github": "https://github.com/",
            "MDN": "https://developer.mozilla.org/en-US/",
            "DigitalOcean": "https://cloud.digitalocean.com"
        },
        "Linux": {
            "/r/Linux": "https://reddit.com/r/linux",
            "sed tutorial": "http://www.grymoire.com/Unix/Sed.html",
            "Distrowatch": "https:distrowatch.com"
        }
    }
};
let listDiv;
(() => __awaiter(this, void 0, void 0, function* () {
    listDiv = document.getElementById("links");
    let keys = [];
    for (let key in config.links)
        keys.push(key);
    for (const key of keys) {
        let linkList = document.createElement("div");
        linkList.classList.add("link-list");
        let linkTitle = document.createElement("h3");
        linkTitle.innerText = key;
        linkList.appendChild(linkTitle);
        let list = document.createElement("ul");
        let links = config.links[key];
        for (const link in links) {
            let li = document.createElement("li");
            li.innerHTML = `<a href="${links[link]}">${link}</a>`;
            list.appendChild(li);
        }
        linkList.appendChild(list);
        listDiv.appendChild(linkList);
    }
}))();
//# sourceMappingURL=main.js.map