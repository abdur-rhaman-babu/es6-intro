class player {
    constructor (name, address){
        this.name = name;
        this.address = address;
    };
    team = 'Ranpur raiders'
    playing (){
        console.log(this.name, 'start opening')
    }
}
const shakib = new player('shakib al hasan',"BD")
const babar = new player('Babar Azam',"Pak")
console.log(babar)
console.log(shakib)