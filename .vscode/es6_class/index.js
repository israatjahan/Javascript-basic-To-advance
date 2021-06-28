class Student {

    constructor (id,name){
        this.id= id;
        this.name = name;
    }
    set studentName(name){
        this.name = name;
    }
    get studentInfo(){
        return this.id +" " +this.name;
    }
}

let stu1 = new Student(204,"Israt");
console.log(stu1)

// stu1.studentName = "Jahan";
// console.log(stu1.name)

console.log(stu1.studentInfo)

