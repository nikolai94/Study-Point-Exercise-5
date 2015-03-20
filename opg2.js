        var randomNum = Math.floor(Math.random() * 100) + 1;
        //to input
        var readline = require('readline');

        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });


        var countAskQuestion =0;
        var askQuestion = function(){

            rl.question("Gæt på et tal ", function(answer) {
                countAskQuestion++;

                if(countAskQuestion == 5){
                    console.log("Du har gættet dine 5 gang.");
                    rl.close();
                }
                else if(Number(answer) > randomNum){
                    console.log("Dit svar er for højt");
                }
                else if(Number(answer) < randomNum)
                {
                    console.log("Dit svar er for lavt");
                }
                else if(Number(answer) == randomNum){
                    console.log("Dit er rigtig");
                    rl.close();
                }

                if(countAskQuestion != 5 && Number(answer) != randomNum){
                askQuestion();
                }

            });

}

askQuestion();
