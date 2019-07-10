<!DOCTYPE html>
<html>
    <head>
        <title>Honda Quiz</title>
        <link  href="css/styles.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
      <div class='container text-center'>
        <header>
            <h1>Honda Quiz</h1>
            <h4>Test your brand specific car knowledge?</h4>
        </header>
          <div id="quizArea">
            <div id="question"></div>

            <div id="answer">
              <input type="text" id="usersAnswer">
              <button class="submitBtn btn btn-success">Submit</button>
            </div>
            <div id="feedback">
              <h4 id="right">Correct!</h4>
              <h4 id="wrong">Incorrect!</h4>
            </div>
            <div id="next">
              <button id="nextBtn" class= "btn btn-success">Next</button>  
            </div>
          </div>
        <footer>
            <div>
            <hr>
              CST336 Internet Programming. 2019&copy Shea <br />
              <strong>Disclaimer:</strong> The information on this website is real, but kinda useless. <br />
              It is for academic purposes only. 
            </div> 
        </footer>
        
        <script src="js/quiz.js"></script>
      </div>
    </body>
</html>