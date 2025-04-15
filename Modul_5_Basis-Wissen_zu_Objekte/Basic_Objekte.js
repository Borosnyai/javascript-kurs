 // Objects
/*
 var human = {
    name: "Jannick",
    height: "180",
    age: "30",
    country: "DE",
    children: ["Maria","KArla", "Jens"]
}

var car = {
    engine: "3000",
    farbe: "Scwarz",
    year: "2025",
    price: "25000"
}
*/
/******************************************************************************** */
/*Objekte-eigenschaften auslesen*/

var human = {
    name: "Jannick",
    height: "180",
    age: "30",
    country: "DE",
    children: ["Maria","Karla", "Jen"]

}
// als property einschreiben
console.log(human["age"])
console.log(human.children)

/********************************************************************************* */
/*Objekt-eigenschaftenverändern*/
var human = {
    name: "Jannick",
    height: "180",
    age: "30",
    country: "DE",
    children: [
        {name: "Maria", age: 10 }, 
        {name: "Maria", age: 14}, 
        {name: "Jen", age : 20}
    ]

}
human["age"] = 35;
human.age = 35;
console.log(human)

human.age = "thirty";
console.log(human)
// wir holen vom children eins das age property.
console.log(human.children[1].age)





