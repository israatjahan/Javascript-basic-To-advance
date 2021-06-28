//array destructure,nested,function parameters:-



//object destructure
const studentInfo ={
    id : 101,
    fullName : "israt jahan",
    gpa : 3.92
}

const {id,fullName} = studentInfo

console.log(id)
console.log(fullName)
console.log(studentInfo)
console.log(id,fullName)


//nested destructure 

const studentInfo2 ={
    id : 101,
    fullName2 : "israt jahan",
    gpa : 3.92,
    languages :{
        native : "Bangla",
        beginner : "English",

    }
}

const {fullName2,languages} = studentInfo2
console.log(languages.native)


// destructuring function parameters:

const studentInformation = ({id,nameOf}) => {
    console.log(`${id},${nameOf}`)
}
const student = {
    id : 209,
    nameOf:"Israt Jahan"
}
studentInformation(student)






