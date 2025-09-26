function FindEqualNumbers(){

while (true){
let num1 = TwoRandomNumbers[Math.floor(Math.random() * TwoRandomNumbers.length )]
let num2 = TwoRandomNumbers[Math.floor(Math.random() * TwoRandomNumbers.length )]
i++
    
    if(num1 === num2){
    document.getElementById("isTheNumbersEqulal").innerHTML += 'Like tall :' + '<br>' + `${num1}` + '<br>' + `${num2}` + '<br>';
    break;
        }
    
    }
}
