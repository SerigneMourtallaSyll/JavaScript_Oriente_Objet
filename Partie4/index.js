// const nomUtil1 = 'Ndongo';
// const emailUtil1 = 'ndongo@gmail.com';
// const amisUtil1 = ['Yaya' , 'Oury'];

// console.log(`Nom: ${nomUtil1}`);
// console.log(`Email: ${emailUtil1}`);
// console.log(`Amis: ${amisUtil1}`);
// console.log('');


// const nomUtil2 = 'Yaya';
// const emailUtil2 = 'yaya@gmail.com';
// const amisUtil2 = ['Ndongo' , 'Oury'];

// console.log(`Nom: ${nomUtil2}`);
// console.log(`Email: ${emailUtil2}`);
// console.log(`Amis: ${amisUtil2}`);
// console.log('');

// const nomUtil3 = 'Syll';
// const emailUtil3 = 'syll@gmail.com';
// const amisUtil3 = ['Ndongo' , 'Oury'];

// console.log(`Nom: ${nomUtil3}`);
// console.log(`Email: ${emailUtil3}`);
// console.log(`Amis: ${amisUtil3}`);
// console.log('');


// login(emailUtil1);
// logout(emailUtil2);

//Object litterale [Encapsulation]
const utilisateurs = {
    nom : 'Ndongo',
    email : 'ndongo@gmail.com',
    amis : ['Yaya' , 'Oury'],
    login(){
        console.log(`${this.email} est connecté (e)`)
    },
    logout(){
        console.log(`${this.email} est déconnecté (e)`);
    }

}

console.log(utilisateurs);
console.log(utilisateurs.nom);
console.log(utilisateurs.email);

utilisateurs.nom = 'Cheikh Ndiaye';
utilisateurs.email = 'cheikh@gmail.com';
console.log(utilisateurs);
