/*
  javascript는 java처럼
  먼저 메모리 공간의 type을 정한 후에
  data를 저장하지 않고
  할당(저장)되는 data에 의해서 type이 결정됨
    ㄴ 동적 type
    하나의 변수에 여러 type의 값들을 할당할 수 있음
    변수 : 한 번에 값 하나만 저장(할당)할 수 있음
*/

let number = 1234;
number = '1234';
number = true;
number = null;

let str1 = 'student';
console.log(str1)
console.log(str1.toUpperCase())

function getUpperCase(id){
  return id.toUpperCase();
}

console.log(getUpperCase('python'))
// console.log(getUpperCase(1234))

console.log(123 + 345)