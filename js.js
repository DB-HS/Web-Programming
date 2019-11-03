var/* 변수 */ /*  */
this/* 해당 태그 */
var (배열) = ["1", "2"];
document.write((배열)[0]);
(배열).length;(배열 개수)
(배열).push('(추가)');
var i = 0;
while(i < (배열).length){
  document.write('<li><a href="https://'+(배열)[i]+'">'+(배열)[i]+'</a></li>');
  i = i + 1;
}
querySelector('')(해당하는 하나)
querySelectorAll('')(해당하는 전부)
console.log()/* 출력 */
function (함수)(parameter매개변수){
}
return/* 리턴 */
var (객체) = {
  "(A)":"(B)"
}
(객체).(A)
(객체).(A) = : "(B)";
(객체)["(A)"] = : "(B)";
for(var key in (객체)){
  document.write([key]+'<br>');
  document.write((객체)[key]+'<br>');
  document.write(key+' : '+(객체)[key]+'<br>');
}
(객체).(추가 함수) = function(){
  for(var key in this){
  document.write(key+' : '+this[key]+'<br>');
  }
}
var (객체A) = {
  (객체B):function(){}
}
function (객체A+B)(){}
var Body = {
  (객체B):function(color){
    document.querySelector('body').style.color = color;
  }
  (객체B):function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
