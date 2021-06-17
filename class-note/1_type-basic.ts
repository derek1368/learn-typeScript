//JS 문자열 선언방식
var str = "hello";

//TS 문자열 선언방식
let str2: string = 'hello';
let num: number = 10;

//TS 배열 선언방식
let arr: Array<number> =[0,1,2];
let hero: Array<string> = ['cat','dog']
let items: number[] = [1,2,3];

//TS 튜플 선언방식  -- 튜플이란 배열 위치에 타입 선택하여 넣을수 잇는것을 말함
let address: [string, number] = ['gang',100];]

//TS 객체 선언방식
let obj: object = {};
let person: object = {
    name : 'capt',
    age : 100
};

let person2: {name: string, age: number } = {
    name : 'thor',
    age : 1000
}
// TS 진위값 선언
let show : boolean = true;