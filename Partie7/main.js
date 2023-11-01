//Abstraction du code : c'est le où l'utilisateur est privé de certaines données
function Employes(nom, age, salaire, sexe){
    this.nom = nom;
    this.age = age;
    this.salaire = salaire;
    this.sexe = sexe;
    const allocation = 20000;
    const primeDeRisk = 30000;

    const salaireGlobal = function(){
        console.log(`Salaire total est: ${salaire + allocation + primeDeRisk}`);
    }

    this.infoEmploye = function(){
        console.log(`Nom: ${nom}`);
        console.log(`Age: ${age}`);
        console.log(`Salaire: ${salaire}`);
        console.log(`Sexe: ${sexe}`);
        salaireGlobal();
    }
}

//Donc ici l'utilisateur n'a pas accès aux variables déclarés à l'interieure de la fonction Employes

//l'instance
const emp1 = new Employes('Jeremy', 22, 100000, 'M');
const emp2 = new Employes('Johna', 30, 90000, 'F');
const emp3 = new Employes('Cheikh', 45, 200000, 'M');

console.log(emp1);
console.log(emp2);
console.log(emp3);

emp1.infoEmploye();
console.log('');
emp2.infoEmploye();
console.log('');
emp3.infoEmploye();


