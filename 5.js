// Print using promise with delay 

const a = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve("Hello brooo");
    },1000)
})
a.then((result)=>{
    console.log(result);
})

// odd even using delay 

function od(n){
    return new Promise((resolve)=>{
        if (n%2==0){
            resolve("Even Number")
        }
        else{
            resolve("Odd Number")
        }
    })
}

od(21).then((result)=>{
    console.log(result)

})

// dely in ms 

function dely(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("The Delay is "+ms+" ms");
        },ms)
    })
}

dely(1000).then((result)=>{
    console.log(result)
})
dely(2000).then((result)=>{
    console.log(result)
})
dely(3000).then((result)=>{
    console.log(result)
})
dely(4000).then((result)=>{
    console.log(result)
})
dely(5000).then((result)=>{
    console.log(result)
})