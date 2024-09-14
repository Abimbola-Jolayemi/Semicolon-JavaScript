let contactList = [];

function Contact(firstName, lastName, ...phoneNumbers) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumbers = phoneNumbers;

  contactList.push(this);
}

function getFirstName(contact) {
  return contact.firstName;
}

function getlastName(contact) {
  return contact.lastName;
}

function getPhoneNumbers(contact) {
  return contact.phoneNumbers;
}

function displayContacts() {
  return contactList.map((contact, index) => {
    return `Contact ${index + 1}:\n` +
           `First Name: ${getFirstName(contact)}\n` +
           `Last Name: ${getlastName(contact)}\n` +
           `Phone Numbers: ${getPhoneNumbers(contact).join(', ')}\n` +
           '--------------------------\n';
  }).join('');
}


module.exports = { Contact, getFirstName, getlastName, getPhoneNumbers, displayContacts };
