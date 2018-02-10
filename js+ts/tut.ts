class Student   {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person  {
  firstName: string;
  lastName: string;
}

function greetings(person: Person){
  return "Hello," + person.firstName + " " + person.lastName;
}

let janeAustin = new Student("Jane",  "M.", "Austin");

document.body.innerHTML = greetings(janeAustin);
