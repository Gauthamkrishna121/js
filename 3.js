// using Push 
var a=[5,6,4];
a.push(50,60)
console.log(a)
 
// using pop 
var a = [10,20,30,40]
a.pop(a[3])
console.log(a)

// using upshift to add begining 

var a = ['Mumbai','chennai'];
a.unshift('Delhi')
console.log(a)

// removing firt element using shift 

var a =['a','b','c']
a.shift('a')
console.log(a)

// concat 

 var a =[1,2]
 var b=[3,4]
 var c=b.concat(a);
 console.log(c)

//  slice 

var a = [1,2,3,4,5,6,7]
var b = a.slice(1,4)
console.log(b)

// indexof and splice remove

var a = ['Amit', 'Neha', 'Ravi', 'Priya'] 
var b = a.indexOf('Ravi')
a.splice(b,1)
console.log(a)

// index of splice add 

var a = ['Math', 'Chemistry', 'Biology']
a.splice(1,0,'physics')
console.log(a)

// splice + iteratiom 

var a = ['Baba','babu','mamu']
a.forEach((b,i,ab)=>{
    if(b=='babu'){
        a.splice(i,1,'heheh');
    }
});
console.log(a)

// printig index ansd value 

var a = [10, 20, 30];
a.forEach((b,i,arr)=>{
    console.log("Index : "+i+" value : "+b);
}
);


    
