class MyClass {
  constructor() {
    console.log("Initializing");
  }

  add(arg1, arg2) {
    return arg1 + arg2;
  }

  callAnotherFunction(arg1, arg2) {
    this.sayHello("Hello");
    const result = this.add(arg1, arg2);
    return result;
  }

  callTheCallback(callback) {
    callback();
  }

  sayHello(str) {
    console.log(str);
  }

  testPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(3), 1000);
    }).then((res) => res * 2);
  }
}

module.exports = MyClass;
