// noImplicitThis 
// 这个错误会在this对象的类型无法确定时出现
// foo函数中this的类型在运行时才可以确定，
// 通过foo()调用的话this是global对象（浏览器中为window）
// 如果global对象上不存在这个方法，在运行时就会生成一个错误
// 通过foo.call(f)调用this会是f对象，而f对象有a方法，所以运行时不会出错
// 因为ts无法通过静态检查推断出this的类型，所以ts也就不知道，
// 这个this对象上会不会有a这个方法
// 为了避免运行时可能存在的错误，开启"noImplicitThis"
// 选项后，ts会报告一个错误，帮助我们将发现错误的时间提前

function foo () {
    this.a()
};

foo();
const f = {
    a() {}
};
foo.call(f);

