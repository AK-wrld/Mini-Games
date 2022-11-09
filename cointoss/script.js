

        toss = () => {
            var ans = window.prompt("Guess heads or tails")
            if (ans != 'heads' && ans != 'tails') {
                window.alert("Please provide a valid guess!")
                return
            }
            var element = document.getElementById("wrap")
            

            function random() {
                var a = 1
                var b = 2
                var randomnum = a + Math.round(+ (b - a) * Math.random());
                console.log(randomnum)
                return randomnum;
            }
            var randomfn = random()
            // console.log(randomfn)
            if (randomfn == 1) {

                element.classList.add("tossheads");
            }
            else {
                element.classList.add("tosstails");

            }

            var compare = function comp() {
                if (ans == 'heads' && randomfn == 1) {
                    window.alert("YAY you guessed it right it is heads")
                }
                else if (ans == 'tails' && randomfn == 2) {
                    window.alert("YAY you guessed it right it is tails")
                }
                else {
                    window.alert("Sorry your guess was wrong T_T")
                }
            }

            setTimeout(compare, 6000)
            var ask = function ask() {

                var ask_user = window.confirm("try again?")
                if (ask_user) {
                    if(element.classList.contains("tossheads")) {
                
                element.classList.remove("tossheads")
            }
            if(element.classList.contains("tosstails")) {
                
                element.classList.remove("tosstails")
            }
                    toss()
                }
            }
            setTimeout(ask,7000)

        }

