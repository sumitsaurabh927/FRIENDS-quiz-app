var readlineSync=require("readline-sync");
var chalk=require("chalk")

var questions=["Who doesn't share food?",
"Who holds a phD?",
"Who is known as the king of sarcasm?",
"She sings 'Smelly cat' Who is she?"]

friends=['Joey','Ross','Chandler','Phoebe','Monica'];

var questionsTwo=[
  "Ross says whose name at the altar in London?",
  "Who attempts to teach Joey french  language?",
  "Who hates thanksgiving?",
  "Who is allergic to kiwi fruit?"
]
friendsTwo=['Rachel','Phoebe','Chandler','Ross','Monica'];

var highScores=[
  {name:"Sumit",
  score:60},
  {name:"Saurabh",
  score:40}
]

var score=0;


console.log(chalk.bgCyan("Score 20 or above to play level 2!\n\n\n"))
for(i=0;i<questions.length;i++){
  console.log(questions[i]);
  index=readlineSync.keyInSelect(friends,">");

  if(friends[index]===friends[i]){
    score+=10;
    console.log(chalk.green("Correct answer!\nYour score is "+score+"\n"))
  }else{
    console.log(chalk.red("Incorrect answer!\nYour score is "+score+"\n"))
  }
  if(score>=20 && i===3){
    console.log(chalk.green("You're now playig level 2!\n"))
    levelTwo();
    console.log(chalk.yellow("\n\n\n\n\nYour final score is "+score))
    
    for(j=0;j<=highScores.length -1;j++){
      console.log(chalk.yellow("\nOther high scorers are: "+highScores[j].name+" -> "+highScores[j].score))
    }
    console.log("\nIf you've beaten their score, please send me a SS!\n\n\n\n")
  }
}

function levelTwo(){
  console.log(chalk.yellow("\n\n\n\n\nWelcome to the big leagues!!\n\n\n\n"))
  for(i=0;i<questionsTwo.length;i++){
    console.log(questionsTwo[i]);
    index=readlineSync.keyInSelect(friendsTwo,">");

    if(friendsTwo[index]===friendsTwo[i]){
      score+=10;
    console.log(chalk.green("Correct answer!\nYour score is "+score+"\n"))
    }else{
    console.log(chalk.red("Incorrect answer!\nYour score is "+score+"\n"))
    }
  }
  return score;
}



