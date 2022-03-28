//Troviamo tramite un ciclo for i multipli di 3 e i multipli di 5. Il ciclo for ci aiuta a scorrere gli elementi e quindi effettuare il controllo


for (let i = 1; i<=100; i++){
    //Troviamo i multipli di 3 quindi matematicamente tutti i numeri divisibili per 3
    if(i%3==0 && i%5==0){
        console.log("FIZBUZZ");
    }else if(i%3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

