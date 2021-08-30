//<!-- 카테고리 매개변수 지우기 -->
//<script type="text/javascript">		
  //브라우저가 pushState가 지원되지 않는다면 사용하지 않도록 설정
  if(typeof(history.pushState) == 'function')
  {
    //현재 주소를 가져온다.
    var CatagoryURL = location.href;

    //게시글 중 매개변수 category가 붙으면 없애버린다.
    //CatagoryURL = CatagoryURL.replace(/\?category=([0-9]+)/ig,'');
    CatagoryURL = CatagoryURL.replace(/\?[0-9, A-Z, a-z, =, \-, _]+/,'');

    //페이지 새로 고침 없이 갱신
    history.pushState(null, null, CatagoryURL);
  }		
</script>
//<!-- // 카테고리 매개변수 지우기 -->
