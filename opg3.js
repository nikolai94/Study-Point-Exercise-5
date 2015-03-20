// Read the file and print its contents.
var fs = require('fs');
var filename = "words.txt";
var arr = [];
var randomWord ="";

//to input
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;


    arr = data.split("\n");

    var random =  Math.floor(Math.random() * arr.length) + 1;
    randomWord = arr[random];

    var randomWordLength = (randomWord.length-1);
    var countAskQuestion =0;
    var askQuestion = function(){

        console.log("Ord starter med: "+randomWord.substring((countAskQuestion+1),0));
        rl.question("Gæt på et ord ", function(answer) {

            //  console.log("randomWordLength:"+randomWordLength+"  countAskQuestion:"+countAskQuestion);

            if(randomWordLength == (countAskQuestion+1))
            {
                console.log("Du kunne ikke gætte det, her er svaret:"+randomWord)
                rl.close();
            }

            else if(answer != randomWord)
            {

                console.log("answer: "+answer+" randomWord: "+randomWord);
                console.log("Dit svar er forkert");
            }
            else
            {
                console.log("Dit svar er rigtig");
                rl.close();
            }

            countAskQuestion++;
            if(randomWordLength != (countAskQuestion))
            {
                askQuestion();
            }


        });

    }
    askQuestion();


    // console.log(data.split("\n"));

});







