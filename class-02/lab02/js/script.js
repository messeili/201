'use_strict'
var userName = prompt("Welcome to my website please tell me your name").toUpperCase();
alert("welcome " + userName + " my name is Mohammad and this is my website please answer the following questions with yes or Know");
var myPlace = prompt(userName + " do you know where I live?");
switch (myPlace.toLowerCase()) {
    case 'yes':
        alert('Amazing ' + userName + " yes I live in Amman")
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
    alert('You are smart ' + userName + " yes I am 27 years old");
    //console.log('You are smart '+ userName+ " yes I am 27 years old");
} else {
    alert("Well " + userName + " I am 27 years old");
    //console.log("Well " + userName + "I live in amman");
}

var myMajor = prompt(userName + " Did I studied computer science at collage?");
switch (myMajor.toLowerCase()) {
    case 'yes':
        alert('Thats not correct ' + userName + " I studied Mechanical Engineering in collage");
        //  console.log('Thats not correct '+ userName+ " I studied Mechanical Engineering in collage");
        break;
    case 'no':
        alert("Well" + userName + " seem that you knows me very well I studied Mechanical Engineering");
        //  console.log("Well" + userName + " seem that you knows me very well I studied Mechanical Engineering");
        break;

    default:
        break;
}
var myCollage = prompt("Well this will be a little bit tricky " + userName + " Did I studied at Hashemite University?");
switch (myCollage.toLowerCase()) {
    case 'yes':
        alert('Thats correct ' + userName);
        //console.log('Thats correct '+ userName );
    case 'no':
        alert("Well " + userName.toUpperCase() + " I have to tell you that unfoutunately statuied at Hashemite University");
        //console.log("Well" + userName + " I have to tell you that unfoutunately statuied at Hashemite University");
        break;
    default:
        break;
}
var myFavaroutMeal = prompt("Ok let me ask you one last qestion " + userName + " Do I Like Pizza??");
switch (myFavaroutMeal.toLowerCase()) {
    case 'yes':
        alert('Yes of course  ' + userName + ' I like to made it too');
        //console.log('Thats correct '+ userName );
    case 'no':
        alert(userName.toUpperCase() + " I'm sorry I like Pizza so much");
        //console.log("Well" + userName + " I have to tell you that unfoutunately statuied at Hashemite University");
        break;
    default:
        break;
}