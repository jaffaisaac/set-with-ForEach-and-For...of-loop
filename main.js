myset = new Set([1,1,2,2,3,3,5,5,{a:100,b:200}]);

myset.forEach(item => {
    console.log(item)
})

//usng the  for...of loop
for(let result of myset){
    console.log(result)
}