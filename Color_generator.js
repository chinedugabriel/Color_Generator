// Button veriable
let btn_RGB = document.getElementById("RGB");
let btn_HEX = document.getElementById("HEX");
let btn_HSL = document.getElementById("HSL");

// live-view-section where the user see's the color
let live_view_section = document.getElementById("live-view-section");

// input Rang & live value preview section for RGB
let setColorControl_RGB = document.getElementById("set-color-control-RGB");

let view_inputRedRgb = document.getElementById("view-red-value-rgb");
let inputRedRgb = document.getElementById("set-red");

let view_inputGreenRgb = document.getElementById("view-green-value-rgb");
let inputGreenRgb = document.getElementById("set-green");

let view_BlueRgb = document.getElementById("view-blue-value-rgb");
let inputBlueRgb = document.getElementById("set-blue");


// input Rang section for HSL
let setColorControl_HSL = document.getElementById("set-color-control-HSL");

let view_inputRedHsl = document.getElementById("view-red-value-hsl");
let inputRedHsl = document.getElementById("set-red-hsl");

let view_inputGreenHsl = document.getElementById("view-green-value-hsl");
let inputGreenHsl = document.getElementById("set-green-hsl");

let view_BlueHsl = document.getElementById("view-blue-value-hsl");
let inputBlueHsl = document.getElementById("set-blue-hsl");


// input Rang section for HEX
let setColorControl_HEX = document.getElementById("set-color-control-HEX");
let view_inputRedHex = document.getElementById("view-red-value-hex");
let inputRedHex = document.getElementById("set-hex");

// opacity control
let opacitySection = document.getElementById("opacity-section");
let view_opacityControl = document.getElementById("view-opacity-value");
let opacityControl = document.getElementById("opacity");

// view general color code 
let view_generalColorCode = document.getElementById("color-code-value-p");

// add color to pallet section
let btn_addColorToSection = document.getElementById("add-to-pallet");

// color pallet section added for later
let view_color_added = document.getElementById("color-add-result-section");

// function to chose color controls between RGB, HEX, HSL
btn_RGB.style.backgroundColor = "#005cc8";
btn_RGB.style.color = "white";
function showRGB(){
    setColorControl_RGB.style.display = "flex";
    setColorControl_HEX.style.display = "none";
    setColorControl_HSL.style.display = "none";
    btn_RGB.style.backgroundColor = "#005cc8";
    btn_RGB.style.color = "white";
    //  below code remove's the background color for btn_HSL and btn_HEX
    btn_HSL.style.backgroundColor = "";
    btn_HSL.style.color = "black";
    // 
    btn_HEX.style.backgroundColor = "";
    btn_HEX.style.color = "black";

    // show opacity 
    opacitySection.style.display = "flex";
}
// btn call the function to show RGB control section.
btn_RGB.addEventListener("click", showRGB);

// live view function to see the color that's been selected
function RGB_liveView(){
    view_inputRedRgb.innerHTML = inputRedRgb.value;
    view_inputGreenRgb.innerHTML = inputGreenRgb.value;
    view_opacityControl.innerHTML = opacityControl.value ;
    view_BlueRgb.innerHTML = inputBlueRgb.value;
    live_view_section.style.backgroundColor = `rgba(${inputRedRgb.value}, ${inputGreenRgb.value}, ${inputBlueRgb.value}, ${opacityControl.value/100})`;

    view_generalColorCode.innerHTML = `rgb(${inputRedRgb.value}, ${inputGreenRgb.value}, ${inputBlueRgb.value})`;
}
inputRedRgb.addEventListener("change", RGB_liveView);
inputGreenRgb.addEventListener("change", RGB_liveView);
inputBlueRgb.addEventListener("change", RGB_liveView);
opacityControl.addEventListener("change", RGB_liveView);

function showHSL(){
    setColorControl_RGB.style.display = "none";
    setColorControl_HEX.style.display = "none";
    setColorControl_HSL.style.display = "flex";
    btn_HSL.style.backgroundColor = "#005cc8";
    btn_HSL.style.color = "white";
    //  below code remove's the background color for btn_RGB and btn_HEX
    btn_HEX.style.backgroundColor = "";
    btn_HEX.style.color = "black";
    btn_RGB.style.backgroundColor = "";
    btn_RGB.style.color = "black";
    // show opacity 
    opacitySection.style.display = "flex";
}
btn_HSL.addEventListener("click", showHSL);

// live view function to see the color that's been selected
function HSL_liveView(){
    view_inputRedHsl.innerHTML = inputRedHsl.value;
    view_inputGreenHsl.innerHTML = inputGreenHsl.value;
    view_opacityControl.innerHTML = opacityControl.value ;
    view_BlueHsl.innerHTML = inputBlueHsl.value;
    live_view_section.style.backgroundColor = `rgba(${inputRedHsl.value}, ${inputGreenHsl.value}, ${inputBlueHsl.value}, ${opacityControl.value/100})`;

    view_generalColorCode.innerHTML = `hsl(${inputRedHsl.value}, ${inputGreenHsl.value}, ${inputBlueHsl.value})`;

}
inputRedHsl.addEventListener("change", HSL_liveView);
inputGreenHsl.addEventListener("change", HSL_liveView);
inputBlueHsl.addEventListener("change", HSL_liveView);
opacityControl.addEventListener("change", HSL_liveView);


function showHEX(){
    setColorControl_RGB.style.display = "none";
    setColorControl_HEX.style.display = "flex";
    setColorControl_HSL.style.display = "none";
    btn_HEX.style.backgroundColor = "#005cc8";
    btn_HEX.style.color = "white";
    // below code remove's the background color for btn_RGB and btn_HSL
    btn_RGB.style.backgroundColor = "";
    btn_RGB.style.color = "black";
    btn_HSL.style.backgroundColor = "";
    btn_HSL.style.color = "black";
    opacitySection.style.display = "none";
}
btn_HEX.addEventListener("click", showHEX);

// 
function HEX_liveView(){
    view_generalColorCode.innerHTML = `${inputRedHex.value}`;
    live_view_section.style.backgroundColor =  `#${view_generalColorCode.innerHTML}`;
}
inputRedHex.addEventListener("change", HEX_liveView);


// write a conditional to check if RGB is active or HSL or Hex which the opacity would use to call the function