//-----------------------------------------------------------------------------
//Fonctions de manipulation de chaînes :
//exercice 1: Inverser une chaîne : écrivez une fonction qui inverse une chaîne donnée.
function inverseChaine(s) {
    return s.split('').reverse().join('');
}
console.log("PP ex 1:",inverseChaine('omar'));
//--------------------------------------------------------------------
//exercice 2: Compter les caractères : créez une fonction qui compte le nombre de caractères dans une chaîne.
function compter_nb(s) {
    return s.length;
}
console.log("PP ex 2:",compter_nb("omarbarhoumi2003"));
//--------------------------------------------------------------------
//exercice 3: Mettre les mots en majuscule : implémentez une fonction qui met en majuscule la première lettre de chaque mot dans une phrase.
function capitalizeWords(s) {
    return s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log("PP ex 3:", capitalizeWords("programme"));
//--------------------------------------------------------------------
//Fonctions de tableau :
//exercice 4:Rechercher le maximum et le minimum : écrivez des fonctions pour trouver les valeurs maximales et minimales dans un tableau de nombres.
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}
const arr1=[1,2,3,4,5];
console.log("tableau ex4:",arr1);
console.log("PP ex 4:max array=",findMax(arr1));
console.log("PP ex 4:min array=",findMin(arr1));
//------------------------------------------------------------------------
// exercice 5 : Somme d'un tableau : créez une fonction qui calcule la somme de tous les éléments d'un tableau.
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log("PP ex 5: la somme de tableau est",sumArray(arr1));
//------------------------------------------------------------------------
// exercice 6:Filtrer le tableau : implémentez une fonction qui filtre les éléments d'un tableau en fonction d'une condition donnée.


var even=arr1.filter(function(num){
    return num % 2 === 0;
})
console.log(even);  
//----------------------------------------------------------------------------
//Fonctions mathématiques :
//exercice 7: Factorielle : Écrivez une fonction pour calculer la factorielle d'un nombre donné.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log("PP exercice 7: le nombre factoriel de 5 est:",factorial(5));
//------------------------------------------------------------------------
//exercice 8: Vérification des nombres premiers : créez une fonction pour vérifier si un nombre est premier ou non.
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("PP exercice 7:",isPrime(7));
//----------------------------------------------------------------------------
//exercice 9 : Suite de Fibonacci : Implémenter une fonction pour générer la suite de Fibonacci jusqu'à un nombre donné de termes. (recherche sur le net)
function fibonacci(n) {
    const sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        [a, b] = [b, a + b];
    }
    return sequence;
}
const sequence=[1,2,3,4,5,6,7,8,9];
console.log("PP exercice 9:",fibonacci(5));


