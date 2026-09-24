// const tinderUser = new Object() yeh single term objet h
const tinderUser = {} // non single term object

tinderUser.id = "123abc",
tinderUser.name = "samay",
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUSer = {
  email: "samay@gmail.com",
  fullname:{
    userfullname:{
        firstname: "ishant",
        lastname: "kuamr",

    }
  }
}

// console.log(regularUSer.fullname.userfullname.lastname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj4 = {5: "a" , 6: "b"}

// const obj3 = { obj1 , obj2}
 // const obj3 = Object.assign({}, obj1 ,obj2 , obj4)
 const obj3 = {...obj1 , ...obj2 , ...obj4}
 // console.log(obj3);

 const users = [

    {
        id: 1,
        email: "i@gmail.com"
    },
    {
        id: 1,
        email: "i@gmail.com"
    },
    {
        id: 1,
        email: "i@gmail.com"
    }
 ]
 users[1].email
 /* console.log(tinderUser);
 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('isloggedI')); */

 const course = {

    coursename:"JS in hindi",
    price: "999",
    courseInstructor: "hitesh"
 }

 // course.courseInstructor

 const {courseInstructor: instructor} = course

 //console.log(courseInstructor);
 console.log(instructor);

 [
    {},
    {},
    {},
 ]