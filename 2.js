// Eb bill
function eb(b){
    if (b<=100){
        console.log(1*b);
    }
    else if(b>100 && b<=200){
        console.log(2*b);
    }
    else if(b>200 && b>200){
        console.log(3*b);
    }
    else{
        console.log("Enter the correct Bill Amount")
    }
}
// Trafic Sign
function sign(s){
    if (s=='red'|| s=='Red'){
        console.log("STOP !!")
    }
    else  if (s == 'Yellow' || s == "yellow"){
        console.log("READY.......")
    }
    else{
        console.log("GOOOOO !!!!")
    }
}
// DAY NAME IN SWITCH

function day(number){
    switch(number){
        case 1:
            console.log("Monday")
        break;
        case 2:
            console.log("Tuesday")
        break;
        case 3:
            console.log("Wednesday")
        break;
        case 4:
            console.log("Thursday")
        break;
        case 5:
            console.log("Friday")
        break;
        case 6:
            console.log("Saturday")
        break;
        case 7:
            console.log("Sunday")
        break;
        
    }
}

function cal(n,a,b){
    switch (n){
        case 1:
            console.log(a+b);
        break;
        case 2:
            console.log(a-b);
        break;
        case 3:
            console.log(a*b);
        break;
        case 4:
            console.log(a/b);
        break;
    }
}

// Month

function month(n){
    switch(n){
        case 1:
            console.log("Jan");
        break;
        case 2:
            console.log("Feb");
        break;
        case 3:
            console.log("Mar");
        break;
        case 4:
            console.log("Apl");
        break;
        case 5:
            console.log("May");
        break;
        case 6:
            console.log("Jun");
        break;
        case 7:
            console.log("Jul");
        break;
        case 8:
            console.log("Aug");
        break;
        case 9:
            console.log("Sep");
        break;
        case 10:
            console.log("Oct");
        break;
        case 11:
            console.log("Nov");
        break;
        case 12:
            console.log("Dec");
        break;

    }
}

// menu

function menu(){
    let choice;
    do{
        choice=prompt("MENU:\n 1.Tea \n 2.Coffie \n 3.Juice");
        switch(choice){
            case '1':
                console.log("Tea IS ready");
            break;
            case '2':
                console.log("Coffie IS ready");
            break;
            case '3':
                console.log("Juice IS ready");
            break;
            case "0":
                console.log("Exiting");
            break;
            default:
                console.log("Invalid Choice");
        }
    }while(choice !== '0');
}

// FOR LOOP
// number

function lo_n(){
    var i = 0;
    for(i=1;i<=100;i++){
        console.log(i)
    }
}

// print number Rese 

function rev(){
    var i = 0;
    for(i=10;i>1;i--){
        console.log(i)
    }
}

// print even number 

function even(){
    var i = 0;
    // for(i=0;i<=50;i+=2){
    for(i=0;i<=50;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
// odd number 

function odd(){
    var i = 0;
    for(i=0;i<=50;i++){
        if(i%2 != 0){
            console.log(i)
        }
    }
}
// sum of natural numbers 
 function sumodd(){
    var i = 0;
    var sum =0;
    for(i=1;i<=100;i++){
        sum +=i;
    }
    console.log(sum)
 }
 
//  multitable 
function mul(a){
    var i = 0;
    var m = 0;
    for(i=1;i<=10;i++){
        m=i*a;
        console.log(i+' * '+a+' = '+m)
    }
}

// factorial 

function fact(a){
    var i = 0;
    var f = 1;
    for(i=1;i<=a;i++){
        f*=i;
    }
    console.log(f);
}

// fibanacci sereis 

function fib(n){
    var a = 0;
    var b = 1;
    var c = 0;
    console.log(a)
    console.log(b)
    for(let i=1;i<=n;i++){
        c=a+b
        console.log(c)
        a=b
        b=c
    }
}

// numbers in the degit

function count(n){
    var c = 0;
    var a = n.toString().length;
    for(let i=1;i<=a;i++){
        c+=1
    }
    console.log(c);
}

