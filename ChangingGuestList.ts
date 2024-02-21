//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.//

class Person {
    constructor(public name: string, public isDeceased: boolean = false) {}
  }
  
  let guestList: Person[] = [
    new Person("saim"),
    new Person("danial"),
    new Person("kamal"),
  ];
  
  const sendInvitation = (person: Person) => {
    if (!person.isDeceased) console.log(`Dear ${person.name},\nYou are invited to dinner!`);
  };
  
  console.log("New Invitations:");
  guestList.forEach(sendInvitation);
  