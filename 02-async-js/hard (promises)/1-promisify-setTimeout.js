/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject)=>{
        if(typeof n=="number"){
            setTimeout(()=>{
                resolve(()=>{
                    console.log(`${n} seconds have passed!`);
                })
            },n)
        }else{
            reject(console.log("Enter a valid time!"));
        }
    })
}

