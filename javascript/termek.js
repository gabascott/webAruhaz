class Termek {
    constructor(node, adat) {
        this.node = node;
        /**selectorok elnvezése */
        this.adat = adat;
        this.termekNev = this.node.children(".termeknev");
        this.termekLeiras = this.node.children(".leiras");
        this.termekAr = this.node.children(".ar");
        
    }
    setAdat(adat) {
            this.adat = adat;
            this.termekNev.text(adat.nev);
            this.termekLeiras.text(adat.leiras);
            this.termekAr.text(adat.ar + " Ft");
            this.termekKep.attr("src", adat.kep);
        }
        //saját esemény létrehozása
    

    //saját esemény létrehozása
}

class TermekAdmin extends Termek{
    constructor(node, adat){
        super(node, adat);
        this.termekTorles = this.node.children(".torles");
        this.termekModosit = this.node.children(".modosit");
        this.termekKep = this.node.children(".kep").children("img");
        this.setAdat(this.adat);
        this.termekTorles.on("click", () => {
            this.torlesTrigger();
        });
        this.termekModosit.on("click", () => {
            this.modositTrigger();
        });
    }
    torlesTrigger() {
        let esemeny = new CustomEvent("termekTorles", {
            detail: this.adat //ezzel adatokat tudok átadni
        });
        window.dispatchEvent(esemeny); // A főablakhoz adom az eseményt,
        //Az eseményt majd a script.js-ben el tudom kapni.
    }
    modositTrigger() {
        let esemeny = new CustomEvent("termekModosit", {
            detail: this.adat //ezzel adatokat tudok átadni
        });
        window.dispatchEvent(esemeny); // A főablakhoz adom az eseményt,
        //Az eseményt majd a script.js-ben el tudom kapni.
    }
}

class TermekVasarlas extends Termek{
    constructor(node, adat){
        super(node, adat);
        this.termekKosarba = this.node.children(".kosarba");
        this.termekKep = this.node.children(".kep");
        this.setAdat(this.adat);
        this.termekKosarba.on("click", () => {
            this.kattintasTrigger();
        });
    }
    kattintasTrigger() {
        let esemeny = new CustomEvent("termekKosarba", {
            detail: this.adat //ezzel adatokat tudok átadni
        });
        window.dispatchEvent(esemeny); // A főablakhoz adom az eseményt,
        //Az eseményt majd a script.js-ben el tudom kapni.
    }
}