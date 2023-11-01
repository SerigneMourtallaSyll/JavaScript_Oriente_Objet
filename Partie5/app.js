//factory function : C'est une maquette (model) pour creer des objets en JS
const utilisateurs = (nom, email , ...amis) => {
    return {
        nom,email, amis,
        login(){
            console.log(`${email} est connecté(e)`);
        },

        logout(){
            console.log(`${email} est déconnecté(e)`);
        }
    }
}

const util1 = utilisateurs('Yaya Dia' , 'yaya@email.com', 'Omar', 'Oury');
const util2 = utilisateurs('Oumar Ndongo' , 'ndongo@email.com', 'Mourtalla', 'Oury');
console.log(util1);
console.log(util2);

util1.login()
util2.logout()