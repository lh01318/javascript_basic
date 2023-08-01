//  이벤트 소스에 이벤트 리스너(핸들러) 등록

// function eventListener(){
//   console.log('왜 눌렀냐');
// }

document.querySelector('button').addEventListener("click", (event) => {
  console.dir(event);
  if(event.ctrlKey){
    event.target.style.backgroundColor = 'blue';
    console.log('왜 눌렀냐')}
  });

  document.querySelector('button').addEventListener("mouseenter",(event)=>{
    event.target.style.backgroundColor = 'yellow';

  });
  document.querySelector('button').addEventListener("mouseleave",(event)=>{
    event.target.style.backgroundColor = '';

  });

function serversend (message){
  console.log(message + '를 서버에 전송합니다.');
};

 let input = document.querySelector('[type = text]');
 input.addEventListener('keypress',(event) =>{
  if(event.keyCode === 13){
    const message = input.value;
    console.log(input.value);
    serversend(message);
  }
 });

//  console.dir(document.frm.search);

// 돔은아니지만 폼 접근 많이씀
// document.frm.search.addEventListener('change', event =>{
//  console.dir(event.target.options);
//  let options = event.target.options;
//  let selectValue = options[options.selectedIndex].value;
//  console.log(selectValue);
// });

document.frm.search.addEventListener('change', event => {
  let options = document.querySelectorAll('option');
  options.forEach(function (element) {
    if(element.selected){
      console.log(element.value);
    }    
  });
});