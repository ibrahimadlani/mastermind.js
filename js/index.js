// Fonction pour verifier la validiter de la combinaison proposé par l'utilisateur //
// This function is for chekcing the code suggested by the user //
function codeChecker(codeSuggested, code){
    var output = [];
    for (let i = 0; i < codeSuggested.length; i++) {
        if (codeSuggested[i] == code[i]){
            output.push(2);
        }else if(codeSuggested[i] == code[0] || codeSuggested[i] == code[1] || codeSuggested[i] == code[2] ||codeSuggested[i] == code[3]){
            output.push(1);
        }else{
            output.push(0);
        }
    }
    return output;
  }