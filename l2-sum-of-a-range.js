 var array = []
var sumnumber = 0

function range(start, end){
for(i=0; i < end; i++){
array.push(start+i)
}return array
}

function sum(range){
for (i=0; i<10; i++){
sumnumber+=range[i]
}
return sumnumber
}




console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
