
module.exports = () =>{

  let arr = [1,2,3,4,5,6,7,8]
  let arr2 = [9,10,11,12,13,14]
  let str1 = arr.join(',')
  console.log(Array.of(str1))
  console.log([...arr, ...arr2])
}
