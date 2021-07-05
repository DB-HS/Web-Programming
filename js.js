// 객체.속성
/* 추천 검색어
document(태그에 대한 객체),
DOM(DOM > document),
window(웹브라우저 제어 객체),
ajax(웹페이지 리로드 없이 정보 변경),
cookie(리로드되어도 현재 상태 유지),
offline web application(인터넷이 끊겨도 동작하는 웹페이지 제작),
webRTC(화상 통신 웹 앱 제작),
speech(사용자의 음성 인식, 음성으로 정보 전달 API)
webGL(3차원 그래픽으로 게임과 같은 것 제작)
webVR(가상현실 제작)
*/
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
var (객체) = {
  (속성):function(){}
}
function (객체+속성)(){}
var Body = {
  (속성):function(color){
    document.querySelector('body').style.color = color;
  }
  (속성):function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
document.write( location.href );/* 현재 페이지 링크 가져오기(페이지 전환) */
console.log( location.href )/* 콘솔 로그에 현재 페이지 링크 표시 */
