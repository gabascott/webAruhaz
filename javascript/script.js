$(function() {

    myAjax("termekek.json", termekLista);

    function termekLista(termekek) {
        const szuloElem = $(".termekek");
        const sablonElem = $(".termek");

        termekek.forEach(function(elem) {
            let node = sablonElem.clone().appendTo(szuloElem);
            const obj = new TermekVasarlas(node, elem);

        });
        sablonElem.remove(); //sablonelem eltávolítása
    }
    
    $(window).on("termekKosarba", (event)=>{
        console.log(event.detail);
    });

});