alert('Welcome to Quiz Ninja!')

//This code is no longer needed
//const question = "What is Superman's real name?"
//const answer = prompt(question);
//alert( `You answered  ${answer}`);

const quiz  = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

//View Object

const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    render(target, content, attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }  
};
    


function start(quiz) {
    
let score = 0 //initialize score
/*
for(const [question,answer] of quiz){
    const response = prompt (question);
    check (response, answer);
};
*/


gameOver()


function ask() {
    const question = `What is ${this.question.name}'s real name?`;
    view.render(view.question, question);
    const response = prompt(question);
    this.check(response);
};


function check(response) {
    const answer = this.question.realName;
        if (response === answer) {
            view.render(view.result, 'Correct!', {'class':'correct'});
            alert('Correct!');
            this.score++;
            view.render(view.score, this.score); 
        } 
        else 
        {
            view.render(view.result, `Wrong! The correct answer was ${answer}`, {'class': 'wrong'});
            alert(`Wrong! The correct answer was ${answer}`);
        }
    };

gameOver()
    view.render(view.info, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' :''}`);
        // At the end of the game, report the player's score

    };
//};

start(quiz)
