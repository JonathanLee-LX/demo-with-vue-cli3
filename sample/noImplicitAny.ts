// noImplicitAny
// 选项noImplicitAny用来告诉编译器，当无法推断一个变量时发出一个错误（或者只能推断出一个隐式的any类型）
// 你可以通过显示标注any类型，或者标注更为准确的类型
// noImplicitAny与noImplicitThis类似
// 当一个对象的类型需要在运行时才能确定的情况下，开启这个选项，ts
// 就会报告一个错误。
// 所以在声明函数的参数时需要标注类型，以便ts在静态检查时期发现错误


function bar(b) {
    b.haha();
}

bar({}); // 在运行时会出现错误'haha function is not defined on b'
bar({ haha() {}}); // 运行正常