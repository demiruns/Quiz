var score = 0
const signs = ['-', '+', '*', '**'];
var correct_answer = 0
Question()

function Shuffle(list){
    for (var i = list.length-1; i>=0; i=i-1){
        randswap = Math.floor(Math.random() * list.length);
        [list[i],list[randswap]]=[list[randswap],list[i]]
    }
    return list
}

function Question(){
    let answers = []
    randno1 = Math.floor(Math.random() * 4) + 5;
    randno2 = Math.floor(Math.random() * 4) + 2;
    randno = Math.floor(Math.random() * 4);
    if (signs[randno]=="-"){
        correct_answer=randno1 - randno2
    }
    if (signs[randno]=="+"){
        correct_answer=randno1 + randno2
    }
    if (signs[randno]=="*"){
        correct_answer=randno1 * randno2
    }
    if (signs[randno]=="**"){
        correct_answer=randno1 ** randno2
    }
    answers.push(randno1 - randno2)
    answers.push(randno1 + randno2)
    answers.push(randno1 * randno2)
    answers.push(randno1 ** randno2)
    answers=Shuffle(answers)
    console.log(answers)
    document.getElementById("No1").innerHTML = randno1;
    document.getElementById("No2").innerHTML = randno2;
    document.getElementById("Math").innerHTML = signs[randno];
    document.getElementById("Button1").innerHTML = answers[0];
    document.getElementById("Button2").innerHTML = answers[1];
    document.getElementById("Button3").innerHTML = answers[2];
    document.getElementById("Button4").innerHTML = answers[3];
}

function Button(answer){
    var value = document.getElementById("Button" + (answer + 1)).innerHTML;
    if (Number(value) === correct_answer){
        score=score+1;
        Question()
    }
    else if (Number(value) != correct_answer){
        score=score-1;
    }
    document.getElementById("Cscore").innerHTML = score;
    
}
