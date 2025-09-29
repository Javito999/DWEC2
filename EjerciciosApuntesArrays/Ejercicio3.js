let array = ["tela", "bies", "hilo", "hilo torzal",
    "tijeras", "máquina de coser", "botón"
];

array.sort(function(elem1, elem2){

    if(elem1.length < elem2.length){
        return -1;
    }else if(elem1.length > elem2.length){
        return 1;
    }else
        return 0;


});
console.log(array);