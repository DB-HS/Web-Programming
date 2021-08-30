/*
크롬 Console 에서 실행 가능하며, '크롬 > 설정 > 검색엔진 관리 > 기타 검색엔진' 항목 제거하는 작업을 'i'가 'x'가 될 때까지 실행합니다.
참고 자료: https://superuser.com/questions/1141135/google-chrome-remove-all-other-search-engines
*/
i = 1;
x = 100;
do {
    document.querySelector("body > settings-ui").shadowRoot.querySelector("#main").shadowRoot.querySelector("settings-basic-page").shadowRoot.querySelector("#basicPage > settings-section.expanded > settings-search-page").shadowRoot.querySelector("#pages > settings-subpage > settings-search-engines-page").shadowRoot.querySelector("#otherEngines").shadowRoot.querySelector("#frb0").shadowRoot.querySelector("#delete").click();
  i += 1;
} while (i < x);
