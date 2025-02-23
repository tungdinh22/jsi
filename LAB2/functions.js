// function thuong
function sum1 (){
    const params =[];
     // fori;loc tu obj arg=> tra ve 1 mang
     for (let index=0 ; index< arguments.length;index++){
        if(typeof arguments[index] === "number") params.push(arguments[index]);
        else throw new Error("Please add item in number type"); // xuat loi neu muon khong la phan tu so
        
     }
     //reduce:tinh tong
  params.reduce = params.reduce(function(prevValue,curValue,curIndex,arr){
    console.table({prevValue,curValue,curIndex,arr});
    return prevValue + curValue;
  },0);
 console.log(result);
}


sum1(1,2,3);

//----------------------------------------
// function goi va chay luon /no name
 (function (a,b) {
 console.log (a + b);
 })(1,2);


 //
 // ES6 : arrow functions
const name = 'abc'
function hello() {
    this.name = 'xyz'
    this.getName=() => {
        //cap 2 => lay this cap 1 (k co)
        () => console.log("1",this.name);

    };
}
const obj1 = new hello1();
obj1.getName();

const hello2=() => {
    console.log(this);
};

hello2();

function hello(name) {
    return 'hello'+name;
}
const h =(name) =>"hello" =name;
const sum =(...data)=>data.reduce((prevValue,curValue,curIndex,arr) => prevValue+curValue,0);
console.log(sum(1,2,3,4,5,6));