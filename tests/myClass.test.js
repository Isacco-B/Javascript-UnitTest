const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const MyClass = require("../myClass");
const obj = new MyClass();

/* The code is using the testing framework Mocha to define a test suite for the MyClass class. */
describe("MyClass", () => {
  /* The `after` function is a hook provided by the Mocha testing framework. It is used to define a block
of code that will be executed after all the test cases in the test suite have been run. In this
specific example, the code inside the `after` function is logging the message "--- After the test
suit ---" to the console. This can be useful for performing cleanup tasks or logging final results
after the tests have finished running. */
  after(() => {
    // console.log("--- After the test suit ---");
  });
  /* The `afterEach` function is a hook provided by the Mocha testing framework. It is used to define a
block of code that will be executed after each individual test case in the test suite has been run.
In this specific example, the code inside the `afterEach` function is logging the message "---
AfterEach the test suit ---" to the console. This can be useful for performing cleanup tasks or
logging intermediate results after each test case has finished running. */
  afterEach(() => {
    // console.log("--- AfterEach the test suit ---");
  });
  /* The `before` function is a hook provided by the Mocha testing framework. It is used to define a
block of code that will be executed before all the test cases in the test suite are run. In this
specific example, the code inside the `before` function is logging the message "--- Before the test
suit ---" to the console. This can be useful for setting up any necessary test data or performing
any required setup tasks before running the tests. */
  before(() => {
    // console.log("--- Before the test suit ---");
  });
  /* The `beforeEach` function is a hook provided by the Mocha testing framework. It is used to define a
block of code that will be executed before each individual test case in the test suite is run. */
  beforeEach(() => {
    // console.log("--- Before the test suit ---");
    sinon.restore();
  });

  it("should add two numbers", () => {
    expect(obj.add(1, 2)).to.be.equal(3);
  });

  /* The code is creating a test case to spy on the `add` method of the `obj` object. */
  it("spy the add method", () => {
    const spy = sinon.spy(obj, "add");
    const arg1 = 10,
      arg2 = 20;
    obj.callAnotherFunction(arg1, arg2);
    // sinon.assert.calledOne(spy);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(arg1, arg2)).to.be.true;
  });

  /* The code is creating a test case to spy on the `callback` function. */
  it("spy the callback", () => {
    const callback = sinon.spy();
    obj.callTheCallback(callback);
    expect(callback.calledOnce).to.be.true;
  });

  /* The code is creating a test case to mock the `sayHello` method of the `obj` object. */
  it("mock the sayHello method", () => {
    const mock = sinon.mock(obj);
    const expectation = mock.expects("sayHello");
    expectation.exactly(1);
    expectation.withArgs("Hello");
    obj.callAnotherFunction(10, 20);
    mock.verify();
  });
});

describe("Test suit for stub", () => {
  beforeEach(() => {
    // console.log("--- Before the test suit ---");
    sinon.restore();
  });
  /* The code is creating a test case to stub the `add` method of the `obj` object. */
  it("Stub the add method", () => {
    const stub = sinon.stub(obj, "add");
    stub.withArgs(10, 20).returns(100);
    expect(obj.callAnotherFunction(10, 20)).to.be.equal(100);
  });
});

describe("Test the promise", () => {
  it("Promise test case", async function () {
    this.timeout(0);
    const result = await obj.testPromise();
    expect(result).to.be.equal(6);
  });
});

/* Root hook for Mocha tests. */
beforeEach(() => {
  // console.log("--- Before the test suit ---");
  sinon.restore();
});
