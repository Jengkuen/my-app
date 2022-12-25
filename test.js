let Equipments = []
let Equipments_f = []
let obj
// format multi select field inputs
for (let i=0; i<Equipments.length;i++) {
    Equipments_f.push(JSON.parse({"name": Equipments[i]}))
}
console.log(Equipments_f)

let i = 0