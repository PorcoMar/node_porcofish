
module.exports = () =>{

  let arr = [1,2,3,4,5,6,7,8]
  let arr2 = [9,10,11,12,13,14]
  let str1 = arr.join(',')
  console.log('str1=', str1)
  console.log(Array.of(str1)) //把数组变成一个一个字符串
  console.log([...arr, ...arr2]) //concat
  for(let i of str1) {
    arr2.unshift(i)
  }
//排序
  let cryptoArr = [3,5,1,6,9,7,3];
  console.log(cryptoArr.sort()) 


}
