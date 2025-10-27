function elementoH2(){

    let parrafo2 = document.querySelectorAll("div > p")[1];

    let parrafo5 = document.querySelectorAll("div > p")[4];

    let parrafo1 = document.querySelectorAll("div > p")[0];

    let parrafo4 = document.querySelectorAll("div > p")[length-1];

    if(parrafo2 && parrafo5){

    parrafo1.remove();
    parrafo5.remove();
    }else{

       parrafo2.after(parrafo1);
       parrafo5.after(parrafo4); 
    }
    

}