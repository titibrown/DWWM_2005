class ClassWithPrivateMethod {
    #privateMethod() {
      return 'hello world';
    }
  
    getPrivateMessage() {
        return this.#privateMethod();
    }
  }
  
  const instance = new ClassWithPrivateMethod();
  console.log(instance.getPrivateMessage());
  // expected output: "hello worl​d"