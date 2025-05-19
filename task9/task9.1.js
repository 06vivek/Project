import data from "./data.json" assert {type:"json"};
data.forEach(element => {
console.log(`ID: ${element.id} NAME : ${element.name} role: ${element.role}`)
}); 