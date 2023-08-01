class Person {

    // 정적 속성(static)
    static commonAttribute = '공통속성';
    // 정적 메소드(static)
    static commonMethod(){
      console.log('공통 메소드입니다.');
    }
    // 생성자 만들기
  constructor(name,age){
    //this = [];
    this.name = name;
    this.age = age;
    // return this;
  }

  // setter/getter
    get name(){
      return this._name;
    }
    set name(name){
      // 데이터 유효성 검증 강제 검증,,,나중엔 여기 넣지말고  try/catch 쓰는게
      if(name === undefined){
        throw new Error('이름은 반드시 입력해야 합니다!');
      }
      this._name = name;
    }
    get age(){
      return this._age;
    }
    set age(age){
      if(age < 10 || age > 100){
        throw new Error('나이는 10 ~ 100 사이여야 한다');
      }
     this._age = age;
      
    }
  showInfo(){
    console.log(`이름:${this.name}, 나이: ${this.age}`);
  }
}

let person = new Person('이현',30);
person.name = '김현';
console.log(person.name);
console.log(person.age);
try{
  // person.name =undefined;
  person.age = 900;
}catch(e){
  alert(e.message);
}
person.showInfo();



console.log(Person.commonAttribute); 
Person.commonMethod();

// 소문자는 안됨 , 대문자여야함
// person.commonMethod();
