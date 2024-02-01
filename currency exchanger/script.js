let baseURL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let currFrom = "USD";
let currTo = "INR";

let userInput = document.querySelector("#val-input");
let btn = document.querySelector("#convertBtn");
let fromDD = document.querySelector("#fromCurrency");
let toDD = document.querySelector("#toCurrency");
let resultDisplay = document.querySelector("#result");

//FILLING DROPDOWNS WITH CURRENCY
for(let currency in countryList){
    let newOption =  document.createElement("option");
    newOption.textContent=currency;
    newOption.value=currency;
    newOption.style.color="#FBFADA";
    fromDD.add(newOption);
    toDD.add(newOption.cloneNode(true));
}
// SETTING DEFAULT VALUES
fromDD.value = currFrom;
toDD.value = currTo;

//get api responce for exchange
const getExchange = async (event)=>{
    event.preventDefault();
    const URL = `${baseURL}/${currFrom.toLowerCase()}/${currTo.toLowerCase()}.json`;
    const responce = await  fetch(URL);
    const body = await responce.json();
    let rate = body[currTo.toLowerCase()];
    let val = userInput.value;
    if(val<1 || userInput==null){
        val = 1;
        userInput.value = 1;
    }   
    let finalAmount = (val*rate).toFixed(2);

    //display final amount
    resultDisplay.innerText = `${val} ${currFrom} = ${finalAmount} ${currTo}`;
}


//CHANGING FLAG ACCORDING TO CURRENT SELECTION
let getFlag = (event)=>{
    event.preventDefault();

    //get the country and currency
    let selectedCurrency = event.target.value;
    let selectedCountry = countryList[selectedCurrency];
    let flagURL = `https://flagsapi.com/${selectedCountry}/flat/64.png`;  

    //get the parent elemet of current click and change img and select in that parent
    let parentElement = event.target.parentElement;
    let image = parentElement.querySelector("img");
    image.src = flagURL;

    let select = parentElement.querySelector("select");
    select.value = selectedCurrency;
    if(select.name == "from"){
        currFrom = selectedCurrency;
    }
    else{
        currTo = selectedCurrency;
    }
}

//EVENT LISTNER FOR EXCHANGE RATE BTN
btn.addEventListener("click",getExchange);
//getting defalut exchange rate for  USD and INR when page loads
window.addEventListener("load",getExchange);

//ADD EVENT LISTNERS TO DROP DOWNS
fromDD.addEventListener("change",getFlag);
toDD.addEventListener("change",getFlag);




