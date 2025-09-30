let array = [3,6,4,7,7,3,7,8,9,10];

let aprobados = array.filter(function(nota){

    if(nota[0] >= 5){
        return true;
    }else{
        return false;
    }

});
console.log(aprobados);

// segunda parte






