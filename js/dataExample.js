// 템플릿 스트링
let name = '이현';
let message = `템플릿 스트링 ${name}`;
console.log(message);

// typeof 연산자

let age = 10;
console.log(typeof age);
console.log(typeof message);

// 특수 숫자 리터럴
console.log(10/0);
console.log('나는 이현입니다.'/10);

// 논리형

let flag = false;
let flag2 = 20;

if(flag2){
   console.log('참입니다.');
}

// 자바스크립트는 자동형변환이 엄청 많이 발생한다..
// 문자보단 숫자쪽에 우위가 있다..
console.log(1000 *'10'); /* 10000 */
console.log('1000' * '10'); /* 10000 */
