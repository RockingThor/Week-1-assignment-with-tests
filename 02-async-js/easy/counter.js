function counter(n){
    let count=0;
    console.log(`The counter has started for ${n} seconds....`);
    let intervalId=setInterval(()=>{
        console.clear();
        console.log(`Counting till ${count} seconds`);
        count++;
        if(n==count-1){
            clearInterval(intervalId);
        }
    },1000)
}

counter(2);