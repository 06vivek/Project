const array = [
   {name : " vivek" ,age : 24, location:'indore'},
   {name : "rishi" ,age : 70, location:'rau'},
   {name : "rohit" ,age : 60, location:'pithampur'},
   {name : "Rishabh" ,age : 5, location:'dhar'},
   {name : "subhman" ,age : 65, location:'dewas'}
]
for(let i of array){
    if(i.age< 50)
{
    console.log(i)
}
}