//Notion de prototype_proto en JS: c'est un objet qui regroupe l'ensemble des methodes d'un objet
function Utilisateurs(nom, email){
    this.nom = nom;
    this.email = email;
    //Si login() et logout() sont definis ici elles sont seront plutot liées aux propriétés 
}
//Methode directement liée au proto
Utilisateurs.prototype.login = function(){
    console.log(`${email} est connecté(e)`);
}

Utilisateurs.prototype.logout = function(){
    console.log(`${email} est déconnecté(e)`);
    
}

const util1 = new Utilisateurs('Yaya Dia' , 'yaya@email.com', 'Omar', 'Oury');
const util2 = new Utilisateurs('Oumar Ndongo' , 'ndongo@email.com', 'Mourtalla', 'Oury');

console.log(util1);
console.log(util2);
