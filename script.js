$(function() {
    const termekek = [];
    let fileNev = "termekek.json";
    const termekSzulo = $(".termekek");
    let sablonElem = $(".termek");
    
    function adatBetolt(fileNev, tomb) {
        $.ajax({
            url: fileNev, success: function (result) {
                result.forEach(element => {
                   tomb.push(element);
                });
                console.log(tomb);
                
                termekek.forEach(function(elem){
                let ujElem = sablonElem.clone().appendTo(termekSzulo);
                const ujTermek = new Termek(ujElem, elem);
                });
                
            }
        });
    }
    
    adatBetolt(fileNev, termekek);
    sablonElem.remove();
    
    $(window).on("kosarbaKattint", (event)=>{
        console.log(event.detail); 
    });
    
    function kosarbaRak(){
        const szuloElem = $(".termekek");
        const sablonElem = $(".termek");
        
        let ujElem = sablonElem.clone().appendTo(szuloElem);
        const ujKosar = new Kosar();
        
        
    }
    
    
//    function termekFeltot(tomb, fileNev){
//        tomb.forEach((elem, index)=>{
//            
//        });
//    }
});