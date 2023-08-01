//  전역 함수 선언
// 함수도 객체긴하지만 함수안의 this는 객체안의 this와는 다르다
function doTask(){
  // console.log('어떤일을 합니다...');
  console.dir(this);
  console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
}

// 객체 생성
let person = {
  name : '이현',
  age : 30,
  doTeach : function (){
    console.log('프로그래밍을 강의합니다...');
  }
}

// 환수 직접 호출
doTask();

// 함수 간접 호출

// doTask.call();
doTask.call(person);


// 특정객체에 동적 속성을 추가하는 기능

function addAttribute(key,value){
  this[key] = value;
}

addAttribute('name','이현');
addAttribute('age',30);
console.dir(window);

let user = {};
// addAttribute.call(user, 'name', '이현');
// addAttribute.call(user, 'age', 30);
// addAttribute.apply(user, ['name', '이현']);
// addAttribute.apply(user, ['age', 30]);
let addProperty = addAttribute.bind(user);
addProperty('name','이현');
addProperty('age', 30);
console.dir(user);

let array = [6,2,9,1];
for (const key in array) {
  if (Object.hasOwnProperty.call(array, key)) {
    const value = array[key];
    console.log(value);
    
  }
}