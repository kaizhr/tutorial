import {renderHTML, onClik, setInner} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

renderHTML("tutorial", "home.html");

onClik  ("button", youtube);

function youtube () {
    window.open ("https://youtube.com");
}