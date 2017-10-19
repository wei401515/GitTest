var array=[1,2,3,4,5];
delete array[1];
console.log(array);
//原型本身
array.forEach(function (value,index,arr) {
    console.log(value);
    console.log(index);
    console.log(arr);
})
// 衍生
function log(value,index,arr) {
    console.log(value);
    console.log(index);
    console.log(arr);
}
for(var i=0;i<array.length;i++){
    log(array[i],i,array)
}

Array.prototype.myForEach=function (callback,thisArg) {
    if(typeof callback!=='function'){
        throw new TypeError(callback+'is not a function');
}
    for(var i=0;i<this.length;i++){
        //判断值是否有效
        if(Object.prototype.hasOwnProperty.call(this,i)){
            callback(this[i],i,this)
        }

    }
}
array.myForEach(function (value,index,arr) {
    console.log(value);
    console.log(index);
    console.log(arr);
})
array.forEach();
//webstorm自带终端
//目录在当前位置