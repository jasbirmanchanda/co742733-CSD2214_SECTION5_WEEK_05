function f1(a, b) {
   
    return (a + b);  // The  function returns the product of p1 and p2
}

function arrays() {
    var pens;
    pens = new Array("red", "orange", "purple", "green", "merjanta");
    console.log(pens);
    console.log(pens[0]);

    for (i = 0; i < pens.length; i++) {
        alert(pens[i]);
    }
    alert("Length od array is:"+ pens.length);
}