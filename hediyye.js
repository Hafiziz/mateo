
var btn = document.getElementsByTagName("button")[0];


function ac(){

    var inp = document.getElementsByTagName("input")[0];
    var sandiqQpq = document.getElementsByClassName("sandiq")[0];
   
    if(inp.value === "433"){

        // alert("Sifre duzdur ++++++");
        sandiqQpq.style.marginTop = "15%";
   }
   else{

    alert("Sifre sehvdir");
  }

}