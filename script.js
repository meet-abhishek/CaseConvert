
function convertToUpper() {

let text = document.getElementById("toupper").value; // or use .value if it's an input field
let upperText = text.toUpperCase();
console.log(upperText); // Outputs: the uppercase version of the text

document.getElementById("result").innerText = upperText;
}

