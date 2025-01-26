//Classess
class Employee{
    constructor(name, phone) {
      this.name = name;
      this.age = phone;
    }
   
    Employee2() {
      console.log(this.name);
    }
  }
   
  const Emp= new Employee('Ram', 50);
  Emp.Employee2();

  //Output Ram

  //promise
const fetchData = new Promise((resolve, reject) => {
    const success = true;
    if(success) {
      resolve('Data fetched successfully!');
    } else {
      reject('Error fetching data');
    }
  });
   
  fetchData
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
   
 //Out put- Data fetched successfully!

 //template String
const EmployeeName= 'Ram';
const CompanyName= 'VS';
const Years= 5;
const templateString= `Hello, my name is ${EmployeeName} ,my comapany name is ${CompanyName} and I am working last ${Years} years.`;
console.log(templateString);  

//Output Hello, my name is Ram ,my comapany name is VS and I am working last 5 years.

//Arrow Function
function mul(a, b) {
    return a * b;
  }
  const mulWithArrow = (a, b) => a * b;
  console.log(mul(5, 3));  
  console.log(mulWithArrow(5, 3));

  //Out put 15
  //Out put 15

  //Destructing
const Value= [1, 2, 3,4];
const [Black, White,yellow,pink]= Value
console.log(Black, White);  
console.log(yellow);

//OutPut 1 2
 //          3

 // Default parameters
// Default parameters
function Student(Sub = 'Math') {
    console.log(`Known Subject, ${Sub}`);
  }
   
  // Default parameters
  function Studnet1(Sub = 'Hindi') {
    console.log(`Known Subject, ${Sub}`);
  }
  Studnet1('Marathi');
  Studnet1();

  //Known Subject, Marathi
//Known Subject, Hindi
   