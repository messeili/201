'usestrict'
var userName = prompt( "Welcome to my website please tell me your name").toUpperCase();
var userPoints = 0;
alert("welcome " + userName +" my name is Mohammad and this is my website please answer the following questions with yes or Know YOU WILL GET 5 POINTS FOR EACH TRUE ANSWER");
var myPlace = prompt(userName + " do you know where I live?");
switch (myPlace.toLowerCase()) {
    case 'yes':
        alert('Amazing '+ userName + " yes I live in Amman")
        userPoints+=5
       // console.log('Amazing '+ userName+ " yes I live in Amman")
        break;
    case 'no':
        alert("Well " + userName + " I live in amman")
      //  console.log("Well " + userName + "I live in amman")
        break;

    default:
        break;
}
var myAge = prompt(userName + " do you how old am I?");
if (myAge.toLowerCase() == 'yes') {
        alert('You are smart '+ userName + " yes I am 27 years old")
        userPoints+=5
        //console.log('You are smart '+ userName+ " yes I am 27 years old");
} else{
    alert("Well " + userName + " I am 27 years old");
    //console.log("Well " + userName + "I live in amman");
}

var myMajor = prompt(userName + " Did I studied computer science at collage?");
switch (myMajor.toLowerCase()) {
    case 'yes':
        alert('Thats not correct '+ userName + " I studied Mechanical Engineering in collage");
      //  console.log('Thats not correct '+ userName+ " I studied Mechanical Engineering in collage");
        break;
    case 'no':
        alert("Well " + userName + " seem that you knows me very well I studied Mechanical Engineering");
        userPoints+=5;
      //  console.log("Well" + userName + " seem that you knows me very well I studied Mechanical Engineering");
        break;

    default:
        break;
}
var myCollage = prompt("Well this will be a little bit tricky " + userName + " Did I studied at Hashemite University?");
switch (myCollage.toLowerCase()) {
    case 'yes':
        alert('Thats correct '+ userName );
        userPoints+=5;
        //console.log('Thats correct '+ userName );
        break;
    case 'no':
        alert("Well " + userName.toUpperCase() + " I have to tell you that unfoutunately statuied at Hashemite University");
        console.log("Well" + userName + " I have to tell you that unfoutunately statuied at Hashemite University");
        break;
    default:
        break;
}


var myNum = 26;
var guessNum = prompt("Ok " + userName + " lets play agame please guess a Number between (0-50)");
if (guessNum != myNum) {
for (var i=4;i>0;i--) {
 if (guessNum<=20){
    guessNum = prompt("Your Guess is too low you have " + i + " more times to guess")
}else if (guessNum>=31){
    guessNum = prompt("Your Guess is too high you have " + i + " more times to guess")
}else if ((guessNum>=21 && guessNum<=25) || (guessNum>=27 && guessNum<=30)){
    guessNum = prompt("You are so close you have " + i + " more times to guess")
}else if (guessNum == myNum){
    alert("You Are magician!!! " + userName + " thats correct the number is "+ myNum)
    userPoints+=5
}
}
if (i=0){
alert("You exceeded your guesing times the true answer is: "+ myNum)}
}else {alert("You Are magician!!! " + userName + " thats correct the number is "+ myNum)}

var myArayCars = ['Avalon','Camry','Corolla','Prius','Yaris','Hilux'];
var guessCarModel = prompt("Ok " + userName + " lets play another agame enter a name of toyota cars model");


// for (i=0; i<myArayCars.length;i++){
//     if (guessCarModel==myArayCars[i]){
//         alert("That Correct " + userName +" Thank you!!")
//     }else{ for (j=6;j>0;j--)
//         guessCarModel=prompt(' wrong answer you have + ' +j+ " more guesses")
//     }
// }


for (var j=6;j>0;j--){
    for (i=0; i<myArayCars.length;i++){
        if (guessCarModel.toLowerCase()==myArayCars[i].toLowerCase()){
           var correct = true
        }
    
    }
    if (correct){
        userPoints+=5
        alert("Thats correct " + userName + " thank you " + userName + " YOUR HAVE GOT " + userPoints+ " POINTS")
        

        break
    }else{
    guessCarModel= prompt(' wrong answer you have ' +j+ " more guesses")
    }

}
