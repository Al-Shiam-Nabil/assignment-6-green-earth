#### answer the following question-

#### 1) What is the difference between var, let, and const?

**Answer:** Var, let, and const are keywords used for declaring variables. But these keywords have some differences.

**Var:** var is function-scoped, not block-scoped.It can be redeclared and updated.If you declare a var variable inside a function, you cannot access it outside that function.var is hoisted. This means if you use it before declaration, its value will be undefined.

**let:** let is block-scoped.It was introduced in ES6.Its value can be updated, but it cannot be redeclared in the same scope.let is also hoisted, but it is in the Temporal Dead Zone, which means you cannot access it before initialization .

**const:** const is also block-scoped.It was introduced in ES6.Its value cannot be updated and it cannot be redeclared.Like let, const is hoisted but remains in the Temporal Dead Zone, so you cannot access it before initialization.

#### 2) What is the difference between map(), forEach(), and filter()?

**Answer:** map(), forEach(), and filter() are useful methods for arrays, but they are used for different purposes.

**map():** map() is an array method that returns a new array.If we use a traditional loop, the code becomes longer, but using map() makes the code shorter and cleaner.It is generally used when we want to transform or update each element and return a new array.

```
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); //[1, 2, 3, 4]

```

**forEach():** forEach() is also used for looping through an array.It works similarly to map(), but it does not return anything.It is mainly used when we just want to perform an action on each element without returning a new array.

```
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(fruit => {
  console.log(fruit);
});

```

**filter():** filter() is used to filter out specific elements from an array based on a condition.It returns a new array as the output.Using filter() makes the code shorter and more readable compared to a traditional loop.

```
const numbers = [10, 15, 20, 25, 30];

const filtered = numbers.filter(num => num > 20);

console.log(filtered); // [25, 30]
console.log(numbers);  // [10, 15, 20, 25, 30] 

```

#### 3) What are arrow functions in ES6?

**Answer:** Arrow functions were introduced in ES6. They provide a shorter way to write functions, and nowadays many developers use arrow functions in their code.In arrow functions, we cannot use this .When we declare a traditional function, we can call it both before and after its declaration because of hoisting.However, an arrow function must be called after it is declared.Arrow functions also do not have their own arguments object.

#### 4) How does destructuring assignment work in ES6?

**Answer:** Destructuring assignment was introduced in ES6.it is use for unpack values from arrays or properties from object.it is much more easier to unpack values form Arrays and properties from object.

```
const fruits = ["Apple", "Banana", "Mango"];

// Traditional
const first = fruits[0];
const second = fruits[1];

// Destructuring
const [a, b, c] = fruits;
console.log(a); // "Apple"
console.log(b); // "Banana"
console.log(c); // "Mango"

// Object
const person = { name: "Nabil", age: 24, country: "Bangladesh" };

// Traditional
const name1 = person.name;
const age1 = person.age;

// Destructuring
const { name, age, country } = person;
console.log(name);   // "Nabil"
console.log(age);    // 24
console.log(country);// "Bangladesh"

```

#### 5) Explain template literals in ES6. How are they different from string concatenation?

**Answer:** Template literals is used to create string. It is a flexible and readable format to write any string.here we use backtic symbole to write a string.in java script we can use template literals for multi line string.we can also use it for dynamic data.

Concatenation is a traditional way to write a string.it is not flexible.in applying this method, code will be larger.

```
const name = "Nabil";
const age = 24;

// Traditional string concatenation
console.log("My name is " + name + " and I am " + age + " years old.");

// Using template literals
console.log(`My name is ${name} and I am ${age} years old.`);

```
