EventListener();

function EventListener(){
    //document.getElementById("amount").addEventListener("change",convertCurrency);
    document.getElementById("btnCalculate").addEventListener("click",convertCurrency);
    document.getElementById("firstCurrency").onchange=function(){
        ui.changeUi();
    } 
    document.getElementById("secondCurrency").onchange=function(){
        ui.changeUi();
    } 
}

const ui=new Ui();
const currency=new Currency();
function convertCurrency(e){
currency.getCurrency(document.getElementById("outputFirst").textContent,document.getElementById(`outputSecond`).textContent,document.getElementById("amount").value)
.then(value=>{
    // console.log(value.result);
    ui.displayCurrency(value.result);
})
.catch(err=>alert(err));
}