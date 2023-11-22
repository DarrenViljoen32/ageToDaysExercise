//AgeToDays

//function to calculate how many days there are in your age
function ageToDays(){
    let enterAge = document.getElementsByTagName(`input`)[0].value;

    //validation. must be a number
    let text;
     if(isNaN(enterAge)){
         text = `Input not valid. Please enter a number.`;
     }else{
         text = ``;
     }
     document.getElementsByTagName(`p`)[1].innerText = text;

     //calculation
    let result = enterAge * 365.24;
    return document.getElementsByTagName(`input`)[1].value = `${result.toFixed(2)} days`;
}