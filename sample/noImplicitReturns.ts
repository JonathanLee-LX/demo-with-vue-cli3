// noImplicitReturns
// 这个选项在不是函数的所有返回路径都有返回值时报错。
// 下面这个abs函数，在x > 0 && y <= 0的情况下
// 没有明确声明有返回值（但实际会返回undefined）
// 只需要加上一个else从句，并return即可

function abs (x: number, y: number) {
    if(x > 0 && y > 0){
        return x + y;
    } else if(x > 0 && y <= 0) {
        return x - y;
    } else if(x <= 0 && y <= 0) {
        return (-x) + (-y);
    } 
}

// const result = abs(1, -1);
// Math.pow(2, result);
