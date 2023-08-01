
// 디폴트 이벤트 해제 폼태그에서 무조건 이거하고...
// 폼태그에서 유효성 검증할때 많이씀
let anchors = document.querySelectorAll('a');
anchors.forEach(element => {
  element.addEventListener('click', event => {
    event.preventDefault();
  });
});

