
const inputElement = document.getElementById("inputtext");


function calculate(value) {
    if (value === "C") {
        inputElement.value = "";
    } else if (value === "DEL") {
        inputElement.value = inputElement.value.slice(0, -1);
    } else {
        inputElement.value += value;
    }
}


function result() {
    try {
        const expression = inputElement.value;
        const result = eval(expression); 
        inputElement.value = result;
    } catch (error) {
        inputElement.value = "Error";
    }
}
