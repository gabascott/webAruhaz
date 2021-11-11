class Termek{
    constructor(elem, adat){
        this.elem = elem;
        
        this.nev = this.elem.children(".termeknev");
        this.leiras = this.elem.children(".leiras");
        this.kep = this.elem.children(".kep");
        this.ar = this.elem.children(".ar");
        this.kosarbaGomb = this.elem.children(".kosarba");
        
        this.adat = adat;
        
        this.setAdatok(this.adat);
        
        this.kosarbaGomb.on("click", ()=>{
            this.KattintTrigger();
        });
    }
    
    setAdatok(ertekek){
        this.nev.html(ertekek.nev);
        this.leiras.html(ertekek.leiras);
        this.kep.attr("src", ertekek.kep);
        this.ar.html(ertekek.ar);
    }
    
    KattintTrigger(){
        let esemeny = new CustomEvent("kosarbaKattint", {detail:this.adat});
        window.dispatchEvent(esemeny);
    }
    
}