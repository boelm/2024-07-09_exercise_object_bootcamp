console.log("%cUser Register", "font-weight:bold");

// const users = [
//     {
//         "name": {
//             "title": "Mr",
//             "first": "Naël",
//             "last": "Henry"
//         },
//         "email": "Nael.Henry@example.com",
//         "nat": "FR"
//     }
// ]

console.log("Users from country");
console.log(filterByCountry(users, "CH"));

console.log("Get user emails");
console.log(listEmails(users));

const countries = [
  {
    name: "Frankrike",
    nat: "FR",
    domain: ".fr",
  },
  {
    name: "Schweiz",
    nat: "CH",
    domain: ".ch",
  },
  {
    name: "Tyskland",
    nat: "DE",
    domain: ".de",
  },
  {
    name: "Norge",
    nat: "NO",
    domain: ".no",
  },
  {
    name: "USA",
    nat: "US",
    domain: ".us",
  },
  {
    name: "Finland",
    nat: "FI",
    domain: ".fi",
  },
  {
    name: "Storbritannien",
    nat: "GB",
    domain: ".uk",
  },
  {
    name: "Nederländerna",
    nat: "NL",
    domain: ".nl",
  },
  {
    name: "Nya Zeeland",
    nat: "NZ",
    domain: ".nz",
  },
  {
    name: "Australien",
    nat: "AU",
    domain: ".au",
  },
  {
    name: "Estland",
    nat: "ES",
    domain: ".ee",
  },
  {
    name: "Irland",
    nat: "IE",
    domain: ".ie",
  },
  {
    name: "Danmark",
    nat: "DK",
    domain: ".dk",
  },
  {
    name: "Brasilien",
    nat: "BR",
    domain: ".br",
  },
  {
    name: "Kanada",
    nat: "CA",
    domain: ".ca",
  },
];

console.log("Reformat emails");
console.log(reformatEmails(users, countries));

//reformat email förnamn.efternamn@example.com
//-> efternamn.förnamn@evilcorp.countrydomain.
function reformatEmails(users) {
  for (user of users) {
    let oldEmail = user["email"];
    let splitedAdress = oldEmail.split("@");
    splitedAdress.pop(); //we will replace last bit of email
    let fornamnEfternamn = String(splitedAdress).split(".");

    let userNat = user["nat"];
    let userDomain = ".com"; //default värde
    for (country of countries) {
      if (country.nat === userNat) {
        userDomain = country.domain;
      }
    }
    let newEmail = `${fornamnEfternamn[1]}.${fornamnEfternamn[0]}@evilcorp${userDomain}`;
    user["email"] = newEmail;
  }
  return users;
}

//list emails
function listEmails(users) {
  let usersEmail = [];
  for (user of users) {
    //usersEmail.push(user['email']); //alt 1
    usersEmail.push(user.email); //alt 2
  }
  return usersEmail;
}

//filterByCountry
function filterByCountry(users, countryCode) {
  let usersFromThisCountry = [];
  for (user of users) {
    if (user.nat === countryCode) {
      usersFromThisCountry.push(user);
    }
  }
  return usersFromThisCountry;
}
