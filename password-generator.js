//4- installing generate-password package using npm and creating a fc to generate random passwords
const generate = require('generate-password'); // here generate is an object containg 
//the actual fc generate and an other fc generateMultiple which generates multiple passwords obvsly 
// console.log(generate);
const mdpfc = () => {
    const mdp = generate.generate();
    return mdp;
}
console.log(`the password is : ${mdpfc()}`); // hne 3aytna lel fc bch nraw l mot de âsse fl retuen mtee3 l fc 