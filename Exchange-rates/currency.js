//svk4K00TIeJRmdDWjCO7l10bIgk9IhCp - API KEY
class Currency{
    async getCurrency(from,to,amount){

        var myHeaders = new Headers();
        myHeaders.append("apikey", "HERE_API_KEY");
    
        var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
        };
    
        const response=await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
        const data=await response.json();
        return data;
    }
    
}
