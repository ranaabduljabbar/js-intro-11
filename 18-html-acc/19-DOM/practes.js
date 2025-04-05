<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Interaction</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f4f4f9;
            text-align: center;
        }

        h1 {
            color: #333;
        }

        .message {
            margin-top: 20px;
            padding: 10px;
            background-color: #e0f7fa;
            border: 1px solid #00796b;
            border-radius: 5px;
            display: inline-block;
        }

        .error {
            color: red;
        }

        .success {
            color: green;
        }
    </style>
</head>
<body>
    <h1>Welcome to the Interactive Page</h1>

    <div id="message" class="message"></div>
    
    <script>
        // Ask for the user's name
        let userName = prompt("Please enter your name:");

        if (userName) {
            
            alert("Welcome, " + userName + "!");
            
            
            let userWantsToContinue = confirm("Do you want to continue?");
            
            if (userWantsToContinue) {
                alert("You chose to continue.");
                document.getElementById('message').innerText = `You chose to continue, ${userName}.`;
            } else {
                alert("You canceled the action.");
                document.getElementById('message').innerText = `You canceled the action, ${userName}.`;
            }

           
            console.log("Browser window width (innerWidth): " + window.innerWidth);
            console.log("Browser window height (innerHeight): " + window.innerHeight);

            
            console.log("The page will reload in 10 seconds...");
            setTimeout(function() {
                window.location.reload();
            }, 10000); 
        } else {
            
            console.error("No name entered. Exiting.");
            document.getElementById('message').innerText = "No name entered. Exiting.";
            document.getElementById('message').classList.add('error');
        }
    </script>
</body>
</html>