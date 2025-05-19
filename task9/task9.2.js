import data from "./data.json" assert {type:"json"};
function filter(data){
    return data.filter((elements)=> elements.name.toUpperCase().includes("AM"))
}
let filterData = filter(data);
console.log(filterData)
