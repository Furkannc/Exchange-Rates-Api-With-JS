class Ui{
   constructor(){
    this.outputFirst=document.getElementById("outputFirst");
    this.outputSecond=document.getElementById("outputSecond");
    this.firstCurrency=document.getElementById("firstCurrency");
    this.secondCurrency=document.getElementById("secondCurrency");
    this.outputResult=document.getElementById("outputResult");
   }
   changeUi(){
    this.outputFirst.innerHTML = this.firstCurrency.options[this.firstCurrency.selectedIndex].textContent;
    this.outputSecond.innerHTML = this.secondCurrency.options[this.secondCurrency.selectedIndex].textContent;
   }
   displayCurrency(data){
       this.outputResult.value = data;
   }
}
