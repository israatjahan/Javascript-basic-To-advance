//how to create promise -> pending, resolve, reject

const promise1 = new Promise((resolve,reject) => {
    let completedPromise = false;
    if (completedPromise) {
        resolve('completed promise 1');
    }else {
        reject ('not completed promise 1');
    }
});

// console.log(promise1);
promise1.then(response => {
    console.log(response);
})
.catch(error => {
   console.log(error) ;
});


