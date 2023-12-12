// Your code here


/*let IsPeople = function(A)
{
   A.every((element) => element instanceof Person);
}*/

class Person{

  constructor(firstName, lastName, age)
  {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce()
  {
     console.log("Hi, I'm " + this.firstName + " " +  this.lastName + ", and I'm " + this.age + " years old.");
  }



  static introducePeople(peopleArray) {
    if (!Array.isArray(peopleArray)) {

      throw new TypeError("introducePeople only takes an array as an argument.");
      //console.log("introducePeople only takes an array as an argument.");
      return;
    }

    if (!peopleArray.every((person) => person instanceof Person)) {

      throw new TypeError( "All items in array must be Person class instances." );
      //console.log("All items in array must be Person class instances.");
      return;
    }

    peopleArray.forEach((person) => person.introduce());
  }

  /*
  static introducePeople(People)
  {
      if(!Array.isArray(People))
      {
        console.log("introducePeople only takes an array as an argument." );
        return;
      }

      if(!People.every((element) => element instanceof Person))
      {

        console.log("All items in array must be Person class instances.");
        return;

      }

      People.forEach((ele)=>ele.introduce());
      return;



  }*/


}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
