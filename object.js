// var student = { id:121, phone:1724, name:"israt"};
// var student2 = {id:131, phone: 1234, name:"Jahan"};
 
// console.log(student);
// console.log(student2);

// for specific object like if I want to t

// var student = { id:121, phone:1724, name:"israt"};
// var student2 = {id:131, phone: 1234, name:"Jahan"};

//  var phoneNo = student.phone;
// console.log(phoneNo);

// console.log(student2);
 
// 2nd type 

// var student = { id:121, phone:1724, name:"israt"};
// var student2 = {id:131, phone: 1234, name:"Jahan"};

//  var phoneNo = student["phone"];
// console.log(phoneNo);

// console.log(student2);


// 3rd type

var student = { id:121, phone:1724, name:"israt"};
var student2 = {id:131, phone: 1234, name:"Jahan"};

 var phonePropName = "phone";
 var phoneNo1 = student.phone;
 var phoneNo2 = student["phone"];
 var phoneNo3 = student[phonePropName];

 //update phone
 student2.phone = 547649;
 student2["phone"] = 58856803;
 student[phonePropName]=99984853;
 console.log(phoneNo1);
 console.log(student)

 
