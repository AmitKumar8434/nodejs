// (function (exports,require,module,__filename,__dirname) {
// const name = 'Amit';

// console.log(name);
    
// });
//when we use any module nodejs wraps it under module wrapper function which have some arguments.
//IIFI
(function () {
    var a = "ak47";
    console.log(a);//IIFI function have private scope.module wrapper function is also IIFI.
})();
console.log(__filename);
console.log(__dirname);