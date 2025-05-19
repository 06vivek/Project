//Print all the keys and values of employee object used in first problem
let employeeDetails={
    Name:"vivek Patidar",
    Email:"vivek@gmail.com",
    Age:24,
    address:"Indore",
    Phone_Number:8269433839,
    Gender:"Male",
     married:"No",
   }

   for(let key in employeeDetails ){
    console.log(key+' : '+ employeeDetails[key]);
   }