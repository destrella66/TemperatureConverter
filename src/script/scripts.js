document.getElementById("submitButton").onclick = function (){
    let temp; 
    if(document.getElementById("cButton").checked){
        temp = document.getElementById("tempId").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°C";
    }
    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("tempId").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F";

    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select an unit"
        
    }

}

function toCelsius(temp){
    return (temp - 32) * (5/9).toFixed(2);
}

function toFahrenheit(temp){
    return (temp * 9/5 + 32).toFixed(2); 
}