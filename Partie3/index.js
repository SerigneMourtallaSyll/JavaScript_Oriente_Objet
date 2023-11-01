//Programmation procédurale et ses défauts

const nomUtil1 = 'Ndongo';
const emailUtil1 = 'ndongo@gmail.com';
const amisUtil1 = ['Yaya' , 'Oury'];

console.log(`Nom: ${nomUtil1}`);
console.log(`Email: ${emailUtil1}`);
console.log(`Amis: ${amisUtil1}`);
console.log('');


const nomUtil2 = 'Yaya';
const emailUtil2 = 'yaya@gmail.com';
const amisUtil2 = ['Ndongo' , 'Oury'];

console.log(`Nom: ${nomUtil2}`);
console.log(`Email: ${emailUtil2}`);
console.log(`Amis: ${amisUtil2}`);
console.log('');

const nomUtil3 = 'Syll';
const emailUtil3 = 'syll@gmail.com';
const amisUtil3 = ['Ndongo' , 'Oury'];

console.log(`Nom: ${nomUtil3}`);
console.log(`Email: ${emailUtil3}`);
console.log(`Amis: ${amisUtil3}`);
console.log('');

function login(email){
    console.log(`${email} est connecté (e)`);
}


function logout(email){
    console.log(`${email} est déconnecté (e)`);
}

login(emailUtil1);
logout(emailUtil2);