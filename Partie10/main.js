//Capacité d'un objet à prendre plusieurs formes

class User {
    constructor(nom){
        this.nom = nom
    }

    login(){
        console.log(`${this.nom} connecté en tant qu'utilisateur`);
    }
}

class Admin extends User {
    login(){
        super.login()
        console.log(`${this.nom} connecté en tant qu'admin`);
    }

}

const user1 = new User('Ndiaga Sall', 'sall@gmail.com', 'Louis', 'Fallou');
const admin = new Admin('Chance key', 'chance@gmail.com', 'Sabaly', 'Ndao');

console.log(user1);
console.log(admin);

user1.login();
admin.login();

