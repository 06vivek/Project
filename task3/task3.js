//In the variables declare above assign the variables as appropriate default value instead of null.

let employeeDetails={
     Name:"vivek Patidar",
     Email:"vivek@gmail.com",
     Age:24,
     address:"Indore",
     Phone_Number:8269433839,
     Gender:"Male",
      married:"No",
      gretting(x){
        console.log(`hello ${x} and ${this.Name}`)
      }
    }
    console.log("Name: "+employeeDetails.Name);
    console.log("Email: "+employeeDetails.Email);
    console.log("Age: "+employeeDetails.Age);
    console.log("address: "+employeeDetails.address);
    console.log("Phone_Number: "+employeeDetails.Phone_Number);
    console.log("Gender: "+employeeDetails.Gender);
    console.log("married: "+employeeDetails.married);
employeeDetails.gretting(3)

    