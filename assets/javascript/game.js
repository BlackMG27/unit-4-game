$(document)
    .ready(function () {
        //create initial variables
        var randomNumber = Math.floor((Math.random() * 101) + 19);
        var counter = 0;
        var wins = 0;
        var losses = 0;
        //create the random options
        var crystalOptions = [];
        // makes the random numbers for the crystalOptions puts random number to the
        // screen
        $('#number-to-guess').text(randomNumber);
        //checks to see if the number is stored
        console.log(randomNumber);

        function randomMaker() {
            return Math.floor((Math.random() * 12) + 1);
        }

        //push the first 4 numbers into a crystalOptions array
        function randomOptions() {

            for (var i = 0; crystalOptions.length < 4; i++) {
                var randomNum = randomMaker()
                //to see if the number is already in the crystalOptions array
                if (crystalOptions.indexOf(randomNum) < 0) {
                    crystalOptions.push(randomNum)
                }
            }
        }
        randomOptions();

        console.log(crystalOptions);
        //put the value randomNumber to the image
        function crystalChoice() {
            for (var i = 0; i < crystalOptions.length; i++) {
                //grab the img class and assigns the crystalOption to it
                $('.crystal-img-' + i).attr('data-crystal', crystalOptions[i])
            }
        }
        crystalChoice();

        //take the crystal class and make the data element into a number
        $('.crystal').on('click', function () {
            //checks to see if the value of the data-crystal is there
            console.log($(this).attr('data-crystal'));
            //take the value and make it into a number
            counter += parseInt($(this).attr('data-crystal'));
            console.log(counter);
            //print the counter to screen
            $('#totalScore').text(counter);

            if (counter === randomNumber) {
                wins++;
                $('#wins').text(wins);
                nextGame();
            } else if (counter > randomNumber) {
                losses++;
                $('#losses').text(losses);
                nextGame();
            }

        });

        function nextGame() {
            counter = 0;
            crystalOptions = [];
            randomNumber = Math.floor((Math.random() * 101) + 19);
            $('#number-to-guess').text(randomNumber);
            randomOptions();
            crystalChoice();
            $('#totalScore').text('');
        }

    });