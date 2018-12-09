// noImplicitAny与noImplicitThis类似
// 当一个对象的类型需要在运行时才能确定的情况下，开启这个选项，ts
// 就会报告一个错误。
// 所以在声明函数的参数时需要标注类型，以便ts在静态检查时期发现错误
function bar(b) {
    b.haha();
}
bar({}); // 在运行时会出现错误'haha function is not defined on b'
bar({ haha: function () { } }); // 运行正常
