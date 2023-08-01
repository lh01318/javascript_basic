// 동적 스타일 적용하기

// let list= document.querySelectorAll('h1');
// list.forEach(element => {
//   element.style.color = 'white';
//   element.style['background-color'] = 'blue';
// });

// let hoverList = document.querySelectorAll('a:hover');
// hoverList.forEach(element => {
//   element.style['background-color'] = 'yellow';
// });


// let list= document.querySelectorAll('h1');
// list.forEach(element => {
//   element.className = 'head';
// });

// classList 추가 제거 가능 메소드 제공 
// className보다 더 유연함

let list= document.querySelectorAll('h1');
list.forEach(element => {
  // element.classList.add('head');
  // element.classList.remove('head');
  setInterval(() => { 
    // 1초마다 깜빡깜빡 ㅋㅋtoggle은 넣었다 뺐다 반복 기능
    element.classList.toggle('head');
  },1000)
});
