import { Student } from "./Student.js";

class HighStudent extends Student{

  constructor(ssn, name, korean, english, math, age) {
    //this = {};
    super(ssn, name, korean, english, math);
    this.age = age;
  }  
  // 편의상 sertter/getter 생략

  // 메소드 오버라이딩 (재정의)
  toString() {
    return super.toString() + `\t ${this.age}`;
  }
}


// let highStudent = new HighStudent(10, '이현', 90, 80, 50,30);

// console.log(HighStudent.toString()); 

// let string = new String('문자열');

export {HighStudent};
