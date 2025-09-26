

while (i <= 100){
  console.log(i);
   i++;
}

function RandomNumbersAreEqual(){
    let num1 = TwoRandomNumbers[Math.floor(Math.random() * TwoRandomNumbers.length + 1)]
    let num2 = TwoRandomNumbers[Math.floor(Math.random() * TwoRandomNumbers.length + 1)]

    if(num1 == num2)
        document.getElementById("isTheNumbersEqulal").innerHTML += num1 +'<br>' + num2 + '<br>';
    console.log(num1, num2)
    
}