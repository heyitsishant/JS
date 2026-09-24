// singleton

// object.create

// object literals

const mySym = Symbol("key1");

const jsUser = {
 name: " ishant ",
 [mySym]: "mykey1",
 "full name": "ishant kumar",
 age: 20,
 location: "patna",
 email: "ishant@gmail.com",
 isLoggedIn: false,
 lastLoginDay: ["monday" , "saturday"]

}

/* console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]); */

jsUser.email = "ishant@chatgpt.com";
// Object.freeze(jsUser)
console.log(jsUser);

jsUser.email = "ishant@microsoft.com";
console.log(jsUser);

jsUser.greeting = function(){

    console.log("hello js user");
}

jsUser.greetingTwo = function(){

    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());