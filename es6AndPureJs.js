//拓展运算符
var arr = [1,2,3];
console.log(...arr);
// console.log(...arr); <==> console.log(1,2,3);  //解构


//赋值数组
a = [1,2,3];
b=a;
a[0] = 666;

//去重
var arrA = [1,1,1,2,2,2,4,4,4]
var arrB = []
for(var i=0;i<arrA.length;i++){
    if(arrB.indexOf(arrA[i])<0){

        arrB.push(arrA[i])
    }
}

//
var set = new Set(arrA)
//这里已经自动去重了，但是现在的数据结构不是数组而是一个set,放到数组里去解构
console.log(ser);

var arrC = [...set];

