//interface란 중복되는 타입의 종류를 처음에 정의하고 여러 곳에서 쓸수있음
interface User {
   age: number;
   name: string; 
}
//변수에 인터페이스 활용
var kim: User = {
    age: 32,
    name: 'kim'
}

// 함수 인자에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
const capt = {
    name: 'Nam',
    age: 31
}
getUser(capt);

//함수의 스팩(구조)에 인터페이스 활용
interface sumFunction {
    (a: number, b: number) : number;
}

var sum: sumFunction;
sum = function(a: number, b: number) :number {
    return a + b;

}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr:StringArray = ['a','b'];
//arr[0] = 10;

//딕셔너리 패턴
interface StringRegexDictionary {
    [key: string] :RegExp
}

var obj:StringRegexDictionary = {
    //sth: /abc/,
    cssFile: /\.css$/,
}