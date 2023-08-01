//  자바스트킵트엔 전역함수가 없다~ 이게 진짜임

// BOM의 구조
console.log(location.href);

let url = 'https://www.naver.com';

// location.href = url;

function go(){
  let url = 'https://www.naver.com';
  location.href=url;
  // location.assign(url);
  // location.replace(url);
  // location.reload();
  
}

