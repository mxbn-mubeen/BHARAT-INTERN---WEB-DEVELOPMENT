function convertTemperature() {
       
    const inputTemperature = parseFloat(document.getElementById("temperature").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;

  
    let result;

    if (inputUnit === "celsius") {
        if (outputUnit === "fahrenheit") {
            result = (inputTemperature * 9/5) + 32;
        } else if (outputUnit === "kelvin") {
            result = inputTemperature + 273.15;
        } else {
            result = inputTemperature;
        }
    } else if (inputUnit === "fahrenheit") {
        if (outputUnit === "celsius") {
            result = (inputTemperature - 32) * 5/9;
        } else if (outputUnit === "kelvin") {
            result = (inputTemperature - 32) * 5/9 + 273.15;
        } else {
            result = inputTemperature;
        }
    } else if (inputUnit === "kelvin") {
        if (outputUnit === "celsius") {
            result = inputTemperature - 273.15;
        } else if (outputUnit === "fahrenheit") {
            result = (inputTemperature - 273.15) * 9/5 + 32;
        } else {
            result = inputTemperature;
        }
    }

    
    document.getElementById("convertedDegree").textContent = result.toFixed(2);
    document.getElementById("convertedUnit").textContent = outputUnit;
}


document.getElementById("temperature").addEventListener("input", convertTemperature);
document.getElementById("inputUnit").addEventListener("change", convertTemperature);
document.getElementById("outputUnit").addEventListener("change", convertTemperature);
document.getElementById("convertedDegree").textContent = result.toFixed(2);



convertTemperature();