var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }
        
        function result()
        {
            var score = 0
            if (document.getElementById('correct1').checked)
            {
                score++;
            }
            if (document.getElementById('correct2').checked)
            {
                score++;
            }
            if (document.getElementById('correct3').checked)
            {
                score++;
            }
            if (document.getElementById('correct4').checked)
            {
                score++;
            }
            if (document.getElementById('correct5').checked)
            {
                score++;
            }
            alert("Your score is " + score)
        }

       
