//  let user = new Object();
let user = {
  name : '이현'
};

console.log(user.toString());
console.log(Object.prototype.isPrototypeOf(user)); 

// Object의  staitc 메소드 활용
// 깊은 복사

let user2 = {};
Object.assign(user2, user);
console.dir(user2);

let prototypee = Object.getPrototypeOf(user);
console.dir(prototypee);