//Constructor Function 
function Utilisateurs(nom, email, ...amis){
    this.nom = nom;
    this.email = email;
    this.login = function(){
        console.log(`${email} est connecté(e)`);
    }

    this.logout = function(){
        console.log(`${email} est déconnecté(e)`);
        
    }
}

//Une instance
const util1 = new Utilisateurs('Yaya Dia' , 'yaya@email.com', 'Omar', 'Oury');
const util2 = new Utilisateurs('Oumar Ndongo' , 'ndongo@email.com', 'Mourtalla', 'Oury');

console.log(util1);
console.log(util2);
//Accès aux méthodes

util1.login();
util2.logout();