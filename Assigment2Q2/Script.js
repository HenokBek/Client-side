
//display hide function
function Hide_function() {
    var x = document.getElementById("info-display");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function decode() {

    //changing decode button to decoded and back to decode
    if (document.getElementById("decode").value === "Decode") {
        document.getElementById("decode").value = "Decoded";
    }
    else {
        document.getElementById("decode").value = "Decode";
        document.getElementById("barcode").value=null;
    }

    var num = document.getElementById("barcode").value;
    var i = num.substr(0, 1);

    function currencyFormat(s) {

        var amount;
       amount=parseInt(s);
        return amount;
    }

    //extracting info if the initial is 4 or 5
    if (i === "4" || i === "5") {
        document.getElementById("Payee").value = "  FI " + num.substring(1, 17);
        document.getElementById("Reference").value = ' RF '+parseInt(num.substring(25, 48));

        document.getElementById("amount-paid").value = currencyFormat(num.substring(18,23))+'.'+num.substring(23, 25);

        //extracting date info, if the date is given
        if(parseInt(num.substr(49,54))!==0) {
            var d = new Date(("20" + num.substring(48, 50)), num.substring(50, 52), num.substring(52, 54));
            document.getElementById("duedate").value =(d.getDate()+'.'+d.getMonth()+'.'+d.getFullYear());
        }
        else{
            document.getElementById("duedate").value ="None";
        }
        JsBarcode("#barcode1",num);
    }

    //document.getElementById("barcode_img").value=num.value;









}