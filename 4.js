// array double return 
function array(n){
    var b = n.toString().split('').map(Number);
    console.log(b)
    var c =[]
    for(var i in b){
        var p = b[i]*2
        c.push(p)
    }
    console.log(c)
}

// temperature to farenheat

function temp(a){
    var b = []
    // var di = 9/5  "To farenheat"
    var di = 5/9 // to celcius
    for (var i in a){
        // var s = (a[i] * di)+32 "To Conver to Farenheat"
        var s = (a[i]-32)*di //"To convert to celcius"
        s=Math.round(s)
        b.push(s)
    }
    console.log(b)
}

// chage the type case 
function cas(a){
    var n=[]
    for (let i in a){
        var b = a[i].toUpperCase()
        n.push(b)
    }
    console.log(n)
}

