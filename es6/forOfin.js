//for ...of and for...in ...

const names = ["s1","s2","s3"]
for(let name of names){
    console.log(name)
}


let students = {
    id: 101,
    name: "anisul Islam",
    cgpa : 3.90
}

for (let x in students){
    // console.log(students[x])
    console.log(`${x} : ${students[x]}`)
}
