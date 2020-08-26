var createPolitician = function (name, partyColor){
    var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor ;
  
    politician.tallyUpTotalVotes = function (){
        this.totalVotes = 0;      
        for (var i = 0; i < this.electionResults.length; i++){
            this.totalVotes = this.totalVotes + this.electionResults[i] ;
        }
    };
    return politician;
};

var charly = createPolitician ("Charly", [132, 17, 11]);
var bobun = createPolitician ("Bobun", [245, 141, 136]);

charly.electionResults =[4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
bobun.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

charly.electionResults [9] = 1;
bobun.electionResults [9] = 28;
charly.electionResults [4] = 17;
bobun.electionResults [4] = 38;
charly.electionResults [43] = 11;
bobun.electionResults [43] = 27;



var setStateResults = function(state){

    theStates[state].winner = null;
    if (charly.electionResults[state] > bobun.electionResults[state]) {     
        theStates[state].winner = charly;    
    } else if (charly.electionResults[state] < bobun.electionResults[state]) {
        theStates[state].winner = bobun;
    }

    var stateWinner = theStates[state].winner;
    if (stateWinner !== null){
        theStates[state].rgbColor = stateWinner.partyColor;
    }else{
        theStates[state].rgbColor = [11, 32, 57];
    }

    var stateInfoTable = document.getElementById('stateResults');
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];
    var stateAbbr = header.children[0].children[1];
    var nameOne = body.children[0].children[0];
    var nameTwo = body.children[1].children[0];
    var resultsOne = body.children[0].children[1];
    var resultsTwo = body.children[1].children[1];
    var winnerName = body.children[2].children[1];

    stateName.innerText = theStates[state].nameFull;
    stateAbbr.innerText = "(" + theStates[state].nameAbbrev + ")";

    nameOne.innerText = charly.name;
    nameTwo.innerText = bobun.name;

    resultsOne.innerText = charly.electionResults[state];
    resultsTwo.innerText = bobun.electionResults[state];

    if (theStates[state].winner === null){
        winnerName.innerText = "DRAW";
    } else{
        winnerName.innerText = theStates[state].winner.name;
    }
}

charly.tallyUpTotalVotes ();
bobun.tallyUpTotalVotes ();


var winner = "???";

if (charly.totalVotes > bobun.totalVotes) {
    winner = charly.name;
} else if (charly.totalVotes < bobun.totalVotes){
    winner = bobun.name;
} else {
    winner = "It's a draw !"
};

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = charly.name ;
row.children[1].innerText = charly.totalVotes;
row.children[2].innerText = bobun.name ;
row.children[3].innerText = bobun.totalVotes ;
row.children[5].innerText = winner;

console.log(charly.totalVotes);
console.log(bobun.totalVotes);
console.log ("The winner is "+ winner + " !");
console.log (charly.partyColor);
console.log (bobun.partyColor);
