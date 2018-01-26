//Pedimos al usuario una frase para encriptarla
var sentence=prompt("Escriba una frase: ");
//Creamos una funcion, para Cifrar una frase 
function cipher(sentence){
    //Almacenamos los newCodeAsciiOfLetterUp y newCodeAsciiOfLetterDown
    var arrayOfCodeAsciiLetter = [];
    //Hacemos un bucle para extraer los caracteres de la sentence
    for(let i = 0; i < sentence.length; i++){
        //Extraemos una letter de la sentence de acuerdo a su posición
        var letter = sentence.charAt(i);
        //Verificamos si la letra es mayuscula o miniscula
        if(letter == letter.toUpperCase()){
            //Devuelve el Codigo ASCII de la letra mayuscula
            var codeAsciiOfLetterUp = letter.charCodeAt(0);
            //Aplicando la formula nos devuelve el nuevo código ASCII
            newCodeAsciiOfLetterUp = (codeAsciiOfLetterUp - 65 + 33) % 26 + 65;
            /*Aplicando el metodo push introducimos los valores de 
            newCodeAsciiOfLetterUp en arrayOfCodeAsciiLetter*/
            arrayOfCodeAsciiLetter.push(newCodeAsciiOfLetterUp);
        }
        else {
            //Devuelve el Codigo ASCII de la letra minuscula
            var codeAsciiOfLetterDown = letter.charCodeAt(0);
            //Aplicando la formula nos devuelve el nuevo código ASCII
            newCodeAsciiOfLetterDown = (codeAsciiOfLetterDown - 97 + 33) % 26 + 97;
            /*Aplicando el metodo push introducimos los valores de 
            newCodeAsciiOfLetterDown en arrayOfCodeAsciiLetter*/
            arrayOfCodeAsciiLetter.push(newCodeAsciiOfLetterDown);
        }
    }
    //Invertimos la posición del array para un buen orden en newSentence 
    var reversArray = arrayOfCodeAsciiLetter.reverse();
    //Declaramos newSentence vacio, para que tome los valores de la concatenación
    var newSentence = " ";
    //Hacemos el bucle, para extraer los codigos ASCII que estan en el index de reversArray
    for(let i = 0; i < reversArray.length; i++){
        //Devuelve la letra que se encuentra en el nuevo codigo ASCII  
        var newLetter = String.fromCharCode(reversArray[i]);
        //Concatena las letras
        var newSentence = newLetter.concat(newSentence);
   }
   //Mostramos al usuario la frase incriptada mediante una alert
   return alert("La frase incriptada sería: " + newSentence);

}

//Creamos una funcion, para descifrar una frase 
function decipher(string){
    //Creamos una variable para obtener la posicion del caracter encriptado
    var posititionOfTheDecryptedCharacter = 0;
    //Creamos una variable para obtener en caracter encriptado
    var decryptedCharacter ='';
    //Creamos una varable para almacenar la palabra encriptada
    var decryptedWord ='';
   //Válidamos que no se ingresen vacíos ni números ni vacios
       if(string.length === 0 ||containsNumber(string)  ){
        return alert('No estas ingresando una cadena, no ingreses campos vacíos ni números');
   
       }else{
   
         //Recorremos el string que proporciona el usuario
         for(let i = 0; i < string.length; i++) {
           //Creamos una variable para obtener el codAscci de la letra
           var asciiCode=string.charCodeAt(i);
           //Evaluamos si la letra es mayúscula o minúscula
           if(isUpperCase(string)) {
             //Obtemos el caracter deseencriptado de la posición i, si es mayuscula
   
             //Evaluamos o condicionamos para que cumpla con  las letras desede la H hasta la Z
             if((asciiCode -65 -33) >= -26){
               posititionOfTheDecryptedCharacter = ((asciiCode -65 -33) + 65 + 26);
   
             //Evaluamos o condicionamos para que cumpla con las letra que escapan de  la condición anterior: Osea con las letra desde la A  hasta la G
             } else if((asciiCode - 65 - 33) <- 26){
               posititionOfTheDecryptedCharacter = ((asciiCode -65 -33) +65 +26 +26);
             }
   
           } else {
             //Obtemos el caracter desencriptado de la posición i, si es minúscula
             if((asciiCode -97 -33) >= -26) {
               posititionOfTheDecryptedCharacter = ((asciiCode -97 -33)+ 97 +26);
             } else if((asciiCode-97-33) < -26){
               posititionOfTheDecryptedCharacter = ((asciiCode -97 -33) + 97 +26 +26);
             }
           }
           //Obtnempos el caracter de la nueva posición
           decryptedCharacter = String.fromCharCode(posititionOfTheDecryptedCharacter);
           //Concatenamos los caracteres para formar el nuevo string ya desencriptado
           decryptedWord += decryptedCharacter;
         }
         return decryptedWord;
      }
   
   }
   
   //Creamos una función para evaluar siel string es númererico
   function containsNumber(string) {
     //Creamos una variable result  que retorna false
     var result = false;
     //Recorremos el string
     for(let i = 0; i < string.length; i++){
       //Declaramos una variable n que va almacenar el caracter de la posición i del string
       var n = string.charAt(i);
       //Retornamos el result
       //con parseFloat(n)--->retornamos el valor numér
       //con !isNaN(parseFloat(n))-->evaluamos que el caracter del parseFloat(n) no se NaN ...osea que necesariamente sea un número
       //con isFinite(n)-->comprobamos que ese caracter es finito
       result=!isNaN(parseFloat(n)) && isFinite(n);
     }
     return result;
   }

//llamamos a la fución
console.log(cipher(sentence));