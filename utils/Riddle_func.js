import input from "analiza-sync";

function askRiddle(riddleObj){
    console.log(`Riddle ${riddleObj.id}:${riddleObj.name}`)
    console.log(riddleObj.taskDescription);
    if("choices" in riddleObj){ 
        let choice=''
        while(choice!=riddleObj.correctAnswer){
        let choices=''
        riddleObj.choices.forEach((element,index) => {choices+=`${element}:${index}   `});
        choice=input(choices)
        console.log(choice);
        }console.log(`${choice} correct answer`);
    }else{
        let choice=''
        while(choice!=riddleObj.correctAnswer){
            choice=input("Please enter the answer")
        }console.log(`${choice} correct answer`);
    }
}

export{askRiddle}