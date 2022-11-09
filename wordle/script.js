let words = ['hello','space','floor','shape','sling','stick','shell','apple','skull','smell','chair','flick','flask','group','grass','grate',
'heist','hover','india','lower','bound','upper','match','nasty','pluck','plugs','plead','query','queen','quilt','gamer','roast','regal',
'royal','ranch','tough','tight','tense','tools','troop','trick','trash','troll','trust','uncle','under','ultra','valid','vowel','write'
,'agile','alike']
let string = words[Math.round((words.length-1)*Math.random())];
    console.log(string)
        const arr = string.split("");
        // console.log(arr)
        var row = 0;
        var col = 0;
        const container = document.getElementById("container");
        const deleteElement = (row, col) => {
            console.log(col)
            if(col<=0) {
                return
            }
            else {

                let cell = document.querySelector(`.col${row}${col-1}`);
                cell.innerText = "";
            }
            
            
        }
        const checkPosition = (val, indx) => {

            if (val == arr[indx]) {
                return true
            }
            return false;
        }
        const isPresent = (val) => {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == val) {
                    return true
                }
            }
            return false
        }
        
    

        document.onkeypress = function fun(event) {
            

            if (col == 5 && event.key == "Enter") {
                var isAns = true;
                for (let i = 0; i <= 4; i++) {
                    let val = document.querySelector(`.col${row}${i}`)
                    // console.log(val.innerText)
                    if (checkPosition(val.innerHTML, i)) {
                        setTimeout(() => {
                            
                            val.classList.add("right-position")
                        }, i*100);
                    }
                    else if (isPresent(val.innerHTML)) {
                        isAns=false
                        setTimeout(() => {
                            
                            
                            val.classList.add("right-letter")
                        }, i*100);
                    }
                    else {
                        isAns=false
                        setTimeout(() => {
                            
                            
                            val.classList.add("not-present")
                        }, i*100);
                    }
                }
                if(isAns==true) {
                    alert("Congrats User You guessed it correct")
                }
            
                else {
                    row++;
                    col = 0;
                 }
            }
            else if (col == 5 && event.key != "Enter" && event.keyCode!=32) {
                alert("cells are full!! Press Enter to check")
                return
            }
             

            else {
                // console.log(event)
                if (event.key == "Enter") {
                    alert("Cells in a row are not filled yet")
                    return
                }
                else if (event.keyCode == 32) {
                 deleteElement(row, col)
                 if(col>0) {

                     col--;
                 }
                 
                 
            }
            else{

                var cell = document.querySelector(`.col${row}${col}`)
                // console.log(cell)
                cell.innerHTML = event.key
                col++;
            }
            }

        }