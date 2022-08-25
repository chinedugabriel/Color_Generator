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

let viewBlueRgb = document.getElementById("view-blue-value-rgb");
let inputBlueRgb = document.getElementById("set-blue");


// input Rang section for HSL
let setColorControl_HSL = document.getElementById("set-color-control-HSL");

let view_inputRedHsl = document.getElementById("view-red-value-hsl");
let inputRedHsl = document.getElementById("set-red-hsl");

let view_inputGreenHsl = document.getElementById("view-green-value-hsl");
let inputGreenHsl = document.getElementById("set-green-hsl");

let viewBlueHsl = document.getElementById("view-blue-value-hsl");
let inputBlueHsl = document.getElementById("set-blue-hsl");


// input Rang section for HEX
let setColorControl_HEX = document.getElementById("set-color-control-HEX");
let view_inputRedHex = document.getElementById("view-red-value-hex");
let inputRedHex = document.getElementById("set-hex");

// opacity control
let view_opacityControl = document.getElementById("view-opacity-value");
let opacityControl = document.getElementById("opacity");

// view general color code 
let view_generalColorCode = document.getElementById("color-code-value");

// add color to pallet section
let btn_addColorToSection = document.getElementById("add-to-pallet");

// color pallet section added for later
let view_color_added = document.getElementById("color-add-result-section");

// function to toggle controls between RGB, HEX, HSL
// function toggleNav(){
//     if(set)
// }


// function colorGenerator(){  
      
//       colorOutput.innHTML = redRange;
//       // alert (redRange.input);
//     }
    
//     ColorOutput.addEventListener("change", colorGenerator);


console.log("setColorControl_RGB.nodeName")