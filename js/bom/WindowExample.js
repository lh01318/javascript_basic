//  자바스트킵트엔 전역함수가 없다~ 이게 진짜임

// BOM의 구조

console.dir(window);

let myWindow= open('../../hello.html','내창');  // 새창 열림
if(myWindow){
  alert('팝업 해제 해줘!');
}
// myWindow.close(); // 새창 닫힘