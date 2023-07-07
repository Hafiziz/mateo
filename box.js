var btn = document.getElementsByTagName("button")[0];


function ac() {

    var inp = document.getElementsByTagName("input")[0];
    var sandiqQpq = document.getElementsByClassName("sandiq")[0];
    var a = document.getElementsByTagName("a")[0];

    if (inp.value === "433") {

        
        sandiqQpq.style.marginTop = "15%";
        a.style.display = "block";

    }
    else {

        alert("Mateo: Şifrə yanlış girilmişdir! ");
    }

}
