// document.getElementById ('');
// document.querySelector ('');
// document.querySelectorAll (''); 

//Exercice 1 : 


let password1 = document.getElementById('password').value ;
let passwordverif = document.getElementById ('passwordVerif').value;
document.getElementById('submitButton').addEventListener('click', () => {
        if (password1 == passwordverif) {
            password1.style.borderColor = 'green' ; 
            passwordverif.style.borderColor = 'green' ;
        } else {
            password1.style.borderColor = 'red' ; 
            passwordverif.style.borderColor = 'red' ;
        }
    })



// var pseudo = prompt('Votre pseudo ?', '');

// if(pseudo.match(/^([0-9a-zA-Z_]){6,20}$/))
//         alert('Pseudo correct !');
// else
//         alert('Pseudo incorrect ;-(');





// // Exercice 2 

// let passwordl = document.getElementById ('password');
// let password2 = document.getElementById('confirmPassword');
// let btn = document.getElementById('myButton');
// //Déclenchement de l'évènement 





// Exercice 4

let image = document.getElementById("img");
function imgChange () {
    document.getElementById("img").onclick.style="red"
};










