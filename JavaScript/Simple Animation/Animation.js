// The setInterval that repeats the function
var i = 1
setInterval(function () {if (i%10!==0){console.log(numProc(i))}; i++}, 69);


// String processor function to make the O move after each itteration
function numProc(x) {
   var newX = 0
   x >=10 ? (newX = x%10) : (newX = x)
   var retString = ""
   if (parseInt((x-1)/10)%2==0) {
      for (var i=1; i <=10; i++) {
         newX==i ? retString+="O" : retString+="-"
      }
   } else {
      for (var i=10; i >=1; i--) {
         newX==i ? retString+="O" : retString+="-"
      }
   }
   return retString
}


// Test for first 20 values, checking if the O
// can go from left to right and back to left.
// for (var i=1; i <= 20; i++) {
//    if (i%10!==0) {
//       console.log(numProc(i))
//    }
// }
