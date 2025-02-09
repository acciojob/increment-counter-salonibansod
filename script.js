//your JS code here. If required.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Increment Counter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        #counter {
            font-size: 24px;
            margin-bottom: 20px;
        }
        button {
            padding: 10px 20px;
            font-size: 18px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <p id="counter">0</p>
    <button id="incrementBtn">Increment</button>
    
    <script>
        const counterElement = document.getElementById("counter");
        const incrementButton = document.getElementById("incrementBtn");
        
        let counterValue = 0;
        
        incrementButton.addEventListener("click", () => {
            alert(`Un-incremented value: ${counterValue}`);
            counterValue++;
            counterElement.textContent = counterValue;
        });
    </script>
</body>
</html>
