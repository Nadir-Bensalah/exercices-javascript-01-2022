// // // Exercice 1 : 

// // // for ( let year = 2020 ; year < 2031 ; year++){
// // //     if (( year % 4 === 0 && year % 100 > 0 ) || ( year % 400 === 0)) {

// // //         document.write('<p style = "color : red"> ' + year + '</p> ') 
// // //     } else {
// // //         document.write('<p>' + year + '</p>');
// // //     }
// // // }








// //Exercice 2 : 

// for ( let i = 0  ; i <= 100 ; i++) {
//     if  (i % 15 == 0) {
//     document.write('<p>' + '...' + '</p>'); 
// } else {
//     document.write('<p>' + i + '</p>');
//     }
// }


// Exercice 3 : 

// let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++', 'ruby', 'python'];
// // for(let n = 0; n < languages.length; n++ ) {
// // }
// // document.body.innerHTML += `<div>${languages[n]} </div>`




// // 2 ème solution : 

// // languages.forEach(elements)=> {
// //     console.log(item);
    
// // });


// // Afficher aussi l'index du tableau

// // languages.forEach((value, key)=> {
// //     document.body.innerHTML += `<div> ${key} . ${value}</div>`; 
    
// // });

// // Sous forme de liste 
// document.write = ('<u>');
// languages.forEach((value, key)=> {
//     document.write += `<li> ${key} . ${value}</li>`; 
// });
// document.write = ('</u>');


// Exercice 4 : 






// Exercice 5 : 

// let firstNumber = 5 ; 
// let secondNumber = 3 ;
// let resultCalc = 0;
// while ( resultCalc < 250) {
//     resultCalc = firstNumber * secondNumber;
//     console.log(resultCalc);
//     secondNumber= resultCalc;
// }




//Exercice 6 :

// let firstNumber = 6 ; 
// let secondNumber = 2 ;
// let resultCalc=firstNumber / secondNumber;
// while ( resultCalc > 1) {
//     resultCalc = firstNumber / secondNumber;
//     console.log(resultCalc);
//     firstNumber= resultCalc;
// }






