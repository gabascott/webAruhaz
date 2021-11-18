$(function() {

    myAjax("termekek.json", termekLista);

    function termekLista(termekek) {
        const szuloElem = $(".termekek");
        const sablonElem = $(".termek");

        termekek.forEach(function(elem) {
            let node = sablonElem.clone().appendTo(szuloElem);
            const obj = new TermekAdmin(node, elem);

        });
        sablonElem.remove(); //sablonelem eltávolítása
    }
    
    $(window).on("termekTorles", (event)=>{
        console.log("törlés");
    });
    $(window).on("termekModosit", (event)=>{
        console.log("módosítás");
    });

});
