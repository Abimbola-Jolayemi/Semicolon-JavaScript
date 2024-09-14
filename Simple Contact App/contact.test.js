const { Contact, getFirstName, getlastName, getPhoneNumbers, displayContacts} = require("./contact");

	let firstname = "Abimbola";
  	let lastname = "Jolayemi";
  	let phonenumber1 = "08142234022";
  	let phonenumber2 = "09011157821";

	const contact = new Contact(firstname, lastname, phonenumber1, phonenumber2);

test("test that contact constructor can add firstname", () => {
  expect(getFirstName(contact)).toBe("Abimbola");
});

test("contact constructor can add lastname", ()=>{
  expect(getlastName(contact)).toBe("Jolayemi");
})

test("contact constructor can add phonenumbers", ()=>{
  expect(getPhoneNumbers(contact)).toEqual(["08142234022", "09011157821"]);
})

test("contact app can display contacts", () => {
  const expectedOutput = `Contact 1:\n` +
                         `First Name: Abimbola\n` +
                         `Last Name: Jolayemi\n` +
                         `Phone Numbers: 08142234022, 09011157821\n` +
                         '--------------------------\n';

  expect(displayContacts()).toBe(expectedOutput);
});


