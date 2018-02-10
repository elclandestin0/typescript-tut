var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greetings(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var janeAustin = new Student("Jane", "M.", "Austin");
document.body.innerHTML = greetings(janeAustin);
