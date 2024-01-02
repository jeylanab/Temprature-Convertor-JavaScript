

document.getElementById("submitbtn").onclick = function () {

    let temp;

    if( document.getElementById("cellabel").checked == true){
        temp = document.getElementById("textfield").value;
        temp = Number(temp);
        temp = tocel(temp);
        temp = document.getElementById("value").innerHTML = `${temp} Celcious!`;
    }
    else if(document.getElementById("fahlabel").checked == true){

        temp = document.getElementById("textfield").value;
        temp = Number(temp);
        temp = tofah(temp);
        temp = document.getElementById("value").innerHTML = `${temp} Fahr! `;



    }
    else {
        temp = document.getElementById("value").innerHTML = "Select The unit";

    }

}
function tocel(temp) {
    return temp  * 9/5 + 32;
  }
  function tofah(temp){
    return (temp - 32 ) * (5/9); 
  }