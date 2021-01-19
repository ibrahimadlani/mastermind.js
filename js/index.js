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

// Fonction pour initialiser un "board" vierge avec un nouveau code //
// This function is creating a blank board with a new generated code //
function initBoard(nbRound){
    var row;
    var board = {
      combinaison:[Math.ceil(Math.random()*7),Math.ceil(Math.random()*7),Math.ceil(Math.random()*7),Math.ceil(Math.random()*7)],
      rows:[]
    }
    for (let i = 0; i < nbRound; i++) {
      row = {
        code:[0,0,0,0],
        output:[0,0,0,0]
      }
      board.rows.push(row);
    }
    return board;
  }

// Fonction pour ajouter un pion de couleur dans le code du round //
// This function is adding one of the six color pieces in the round code //
function addPiece(board,piece,round){
    if(board.rows[round].code[0] == 0){
        board.rows[round].code[0] = piece;
    }else if(board.rows[round].code[1] == 0){
        board.rows[round].code[1] = piece;
    }else if(board.rows[round].code[2] == 0){
        board.rows[round].code[2] = piece;
    }else if (board.rows[round].code[3] == 0){
        board.rows[round].code[3] = piece;
    }else {
        console.log("Error : Plus de place dans le code");
    }
  }

// Fonction pour supprimer un pion dans le code du round dans l'ordre//
// This function is removing a piece in the round code in order//
function rmPiece(board,round){
    if(board.rows[round].code[3] != 0){
        board.rows[round].code[3] = 0;
    }else if(board.rows[round].code[2] != 0){
        board.rows[round].code[2] = 0;
    }else if(board.rows[round].code[1] != 0){
        board.rows[round].code[1] = 0;
    }else if (board.rows[round].code[0] != 0){
        board.rows[round].code[0] = 0;
    }else {
        console.log("Error : Tout est déjà effacé");
    }
  }

var board = initBoard(7);