const foo={name:"John",years:30};
const {name,years:age}=foo
console.log(name);
console.log(age);

// for 循环

function  sumTo(n){
    for(var i=1,sum=0;i<=n;i++)
{
    sum+=i;
   
}
return sum;
}
var k=sumTo(100);
console.log(k);



// 递归

function sum1(n){
    var n;
    if (n==1)
  {return 1;}
  else
{return n+sum1(n-1);
}

}

var m=sum1(100);
console.log(m);



// 公式求和

function sum2(n){
    x=(n+1)*n/2
    return x;
}
var z=sum2(100);
console.log(z);


// 作业3

function Accumulator(n) {
    this.value = n;
  
    this.read = function() {
      this.value += +prompt('输两个数相加?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  console.log(accumulator.value);
  alert(accumulator.value);