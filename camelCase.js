/**
 * Sample Input
S;M;plasticCup()
C;V;mobile phone
C;C;coffee machine
S;C;LargeSoftwareBook
C;M;white sheet of paper
S;V;pictureFrame

Sample Output
plastic cup
mobilePhone
CoffeeMachine
large software book
whiteSheetOfPaper()
picture frame
 */

const processData = (input) => {
  const params = input.split(";");
  const [method, type, str] = params;
  if (method === 'C') {
    if (type === 'V') {
      let result = ''
      
      // const str2 = str.charAt(0).toUpperCase() + str.slice(1);

    }
  }
  console.log(method, type, str);
};

// console.log(processData("S;M;plasticCup()"));
console.log(processData("C;V;mobile phone"));
