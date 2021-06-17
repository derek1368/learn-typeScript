// 함수의 파라미터  타입 정의 방식
function sume(a:number,b:number) {
    return a+b;
}

sume(10,20);

// 함수의 변환 값 에 타입을 정의하는 방식 
function add(): number {
    return 10;
}

// 함수에 타입을 정의하는 방식
function sum2 (a: number, b: number) : number {
    return a+b;
}

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {


}
log('hello');
log('hello','hello2');