function timer(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(console.log(`${second} seconds`));
            second++;
        },1000)
    })
}
async function counter(n){
    for(let i=0;i<n;i++){
        await timer();
    }
}
let second=1;
counter(5);