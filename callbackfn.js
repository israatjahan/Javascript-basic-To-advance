function explain_callback(name, age,task){
     console.log('hello', name);
     console.log('your age', age)
    //  washHand();
    //  takeShower();
    task();
   
}
function takeShower(){
    console.log('take shower')
}
function washHand(){
    console.log('wash hand with soap')
}
function scrollFacebook(){
    console.log("Facebooking is boring");
}

explain_callback('sogir Uddin',17,washHand);
explain_callback('Jogir Uddin',13,takeShower);
explain_callback('Kobir', 14,scrollFacebook);