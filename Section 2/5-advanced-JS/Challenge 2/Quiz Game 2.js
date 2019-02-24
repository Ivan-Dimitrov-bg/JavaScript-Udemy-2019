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

    Question.prototype.checkAnswer = function(answer, callback) {
        var scc;
        if (answer === this.correctAnswer) {
            console.log('Correct answer!');
             scc = callback(true);   
        } else {
            console.log('Wrong answer. Try again' );
            scc = callback(false);   
        }
        this.displayScore(scc)
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is:' + score);
        console.log('------------------------------')
    }
        
        
        
    var q1 = new Question('Question text 1?',['answ1', 'answ2', 'asnw3'],0);
    var q2 = new Question('Question text 2?',['answ1', 'answ2', 'asnw3'],1);
    var q3 = new Question('Question text 3?',['answ1', 'answ2'],1);
    var arrQ = [q1, q2, q3];
    
    function score(){
        var sc = 0;
        return function(correct){
            if (correct) {
                 sc++;
            }  
            return sc;
        }
    }
    
    var keepScore = score();
    
    function nextQuestion(){
        
        var randmQ = Math.floor(Math.random() * arrQ.length);

        arrQ[randmQ].displayQuestion();

        var answer = (prompt('Please select the corect ansswer (type the number)'));
        
        if(answer !== 'exit'){
            arrQ[randmQ].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
       
    }
    
    nextQuestion();
    
    
})();

   