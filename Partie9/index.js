class Utilisateur{
    constructor(nom, email, ...amis){
        this.nom = nom;
        this.email = email;
        this.amis = amis;

    }

    login(){
        console.log(`l'utilisateur ${this.email} est connecté(e)`);
    }

    logout(){
        console.log(`l'utilisateur ${this.email} est déconnecté(e)`);
    }


}

class Admin extends Utilisateur{
    //Methode accessible a l'admin 
    supprimerUtil(util){
        utilisateurs = utilisateurs.filter(user => {
            return user.email != util.email
        })
    }
}

const user1 = new Utilisateur('Ndiaga Sall', 'sall@gmail.com', 'Louis', 'Fallou');
const user2 = new Utilisateur('Oury Ba', 'oury@gmail.com', 'Cheikh', 'Kalika');
const admin = new Admin('Chance key', 'chance@gmail.com', 'Sabaly', 'Ndao');

let utilisateurs = [user1, user2, admin];
console.log(utilisateurs);


admin.supprimerUtil(user1);
console.log(utilisateurs);