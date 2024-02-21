//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.//
var Person = /** @class */ (function () {
    function Person(name, isDeceased) {
        if (isDeceased === void 0) { isDeceased = false; }
        this.name = name;
        this.isDeceased = isDeceased;
    }
    return Person;
}());
var guestList = [
    new Person("saim"),
    new Person("danial"),
    new Person("kamal"),
];
var sendInvitation = function (person) {
    if (!person.isDeceased)
        console.log("Dear ".concat(person.name, ",\nYou are invited to dinner!"));
};
console.log("New Invitations:");
guestList.forEach(sendInvitation);
