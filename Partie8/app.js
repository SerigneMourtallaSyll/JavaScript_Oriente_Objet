//Class : c'est une maquette(model) pour creer des objets.
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

const user1 = new Utilisateur('Ndiaga Sall', 'sall@gmail.com', 'Louis', 'Fallou');
const user2 = new Utilisateur('Oury Ba', 'oury@gmail.com', 'Cheikh', 'Kalika');

console.log(user1);
console.log(user2);

user1.login();
user2.logout();