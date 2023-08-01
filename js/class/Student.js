
// 학생객체 생성을 위한 틀(클래스)
// export
class Student{

  // 정적(static) 속성 및 메소드 추가
  static commonAttribute = '공통속성';
  static schoolName = "Ezen초등학교";
  static showSchoolName = function () {
  console.log(Student.schoolName);
  }

  getSum() {
    return this.korean + this.english + this.math;
  }
  
  getAverage() {
    return this.getSum()/3;
  }
  
  toString() {
    return `${this.ssn} \t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAverage()}`;
  }

  constructor(ssn, name, korean, english, math) {
    this.ssn = ssn;
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
  }  

}

// let  student = new Student(10, '이현', 90, 80, 50);

// console.log(student.toString());
// console.dir(student);

// //  프로토타입 상속 체인 검증
// console.log('name' in student);
// console.log('valueOf' in student);

// // Object 프로토타입객체의 메소드 재사용
// console.log(student.hasOwnProperty('name'));
// console.log(student.hasOwnProperty('valueOf'));
// console.log(student.toString());

// Student.showSchoolName();


let xxx = 500;

function yyy(){
  console.log('내보내기');
}
export{Student, xxx, yyy};

