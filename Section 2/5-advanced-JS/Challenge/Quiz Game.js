(function () {
    
    function Question(questionText, answers, correctAnswer) {
        this.questionText = questionText;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function () {

        console.log(this.questionText);

        for (var i  = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correctAnswer) {
            console.log('Correct answer!');

        } else {
            console.log('Wrong answer. Try again' );
        };
    }

    var q1 = new Question('Text q1',['answ1', 'answ2', 'asnw3'],0);
    var q2 = new Question('Text q2',['answ1', 'answ2', 'asnw3'],1);
    var q3 = new Question('Text q3',['answ1', 'answ2'],2);

    var arrQ = [q1, q2, q3];

    var randmQ = Math.floor(Math.random() * arrQ.length);

    arrQ[randmQ].displayQuestion();

    var answer = parseInt(prompt('Please select the corect ansswer (type the number)'));

    arrQ[randmQ].checkAnswer(answer);
    
})();

   