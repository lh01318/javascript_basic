console.dir(document.firstChild); // <!DOCTYPE html> 접근
console.dir(document.firstElementChild); // <html lang="ko"> 접근
console.dir(document.firstElementChild.constructor);

// #1. 돔트리 계층 구조로 검색
// Node의 공통 속성 3개!
console.log(document.firstElementChild.nodeType === Node.ELEMENT_NODE);
console.log(document.firstElementChild.nodename);
console.log(document.firstElementChild.nodeValue);

// 특정 ELEMENT를 찾아가는 3가지 방법 (tag,id,class)

// body 요소 접근 (빈공백도 텍스트로 취급)
console.log(document.firstElementChild);

// #2. get메소드로 특정 요소 접근
let pArray = document.getElementsByTagName('p');
console.log(pArray.length);
// 리턴타입은 배열이 아니고 유사배열입니다...
console.log(pArray.constructor);
for (const element of pArray) {
  console.log(element.nodename);
}
let pElement = document.getElementById('myP');
console.dir(pElement);

let htmlcollection = document.getElementsByClassName('container');
console.dir(htmlcollection);
// console.clear();
// #3. CSS 선택자를 이요한 검색
// console.dir(document.querySelector('p'));

// console.dir(document.querySelectorAll('p'));

let nodeList = document.querySelectorAll('p');
nodeList.forEach(element =>{
  console.log(element.nodeName);
});
let pEl = document.querySelector('#myP');
console.log(pEl.nodeName);

let textNode =  pEl.firstChild;
console.log(textNode.nodeName);
console.log(textNode.nodeValue);
// alert(textNode.nodeValue);

console.log(document.querySelector('.container').firstChild.nodeValue);

console.log(document.querySelector('li:first-child').firstChild.data);
console.log(document.querySelector('li:last-child').firstChild.data);
let list = document.querySelectorAll('li:nth-child(2n+1)');
list.forEach(element => {
  console.log(element.firstChild.data);
});
