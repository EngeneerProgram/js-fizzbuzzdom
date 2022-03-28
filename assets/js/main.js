//Troviamo tramite un ciclo for i multipli di 3 e i multipli di 5. Il ciclo for ci aiuta a scorrere gli elementi e quindi effettuare il controllo


for (let i = 1; i<=100; i++){
    //Troviamo i multipli di 3 quindi matematicamente tutti i numeri divisibili per 3
    if(i%3==0){
        console.log("multiplo di 3");
        //troviamo i multipli di 5 quindi tutti i numeri divisibili per 5
    } else if (i%5==0){
        console.log("multiplo di 5");
        //se i primi cicli non sono soddisfatti allora vogliamo stampare il numero normale senza verifica di multipli
        
    }else{
        console.log(i);
    }
}

const numero = document.getElementById("number");

numero.appendChild(i);
