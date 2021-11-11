class Kosar{
    constructor(){
        this.kosarTomb = [];
        this.kosarElem = $(".kosaram");
        
        this.setElemKosarba();
    }
    
    setElemKosarba(elem){
        this.kosarTomb.push(elem);
        this.megjelenit();
    }
    
    megjelenit(){
        $("#kosaram").empty();
        $("#kosaram").append("<table>");
        
        let elem = "<tr id='fejlec'><th>Név</th><th>Leírás</th><th>Ár</th></tr>";
        
        this.kosarTomb.foreach(function(value, index){
            elem += "<tr id='" + index + "'>";
            for (let item in value) {
                elem += "<td>" + value[index] + "</td>";
            }
        });
        
        $("#kosaram table").append(elem);
    }
}