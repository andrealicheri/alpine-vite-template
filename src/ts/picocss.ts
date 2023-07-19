/* This template has interactive use as its primary objective, so 
importing PicoCSS with a standard link tag for progressive enhancement
is out of the scope of my desired use case.*/

import PicoCSS from "@picocss/pico/css/pico.min.css"

// Inits PicoCSS
const style = document.createElement("style");
style.textContent = PicoCSS;
document.head.appendChild(style);