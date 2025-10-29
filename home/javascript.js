            function ask(message, hint="Please enter a valid respose.") {
                let response = prompt(message)?. trim();
                if (!response) {
                    alert(hint);
                    return ask(message);
                }
                return response;
            }

            let isValid = false;
            let name;

            while (!isValid) {
                name = ask ("What is your name?")

                // check if name is valid
                if (
                    name.toLowerCase() === "dad"          ||
                    name.toLowerCase() === "matt"         ||
                    name.toLowerCase() === "matt fazekas" ||
                    name.toLowerCase() === "robe guy"     ||
                    name.toLowerCase() === "batman"        
                ) {
                    alert ("Hello Dad, I'm learning about JavaScript, hope you like it.")
                    isValid = true
                } else if (
                    name.toLowerCase() === "uncle richard"   ||
                    name.toLowerCase() === "dick"            ||
                    name.toLowerCase() === "richard fazekas" ||
                    name.toLowerCase() === "richard"
                ) {
                    alert ("Hi Uncle Richard!")
                    isValid = true
                } else {
                    alert ("Your not anyone I want...get out. (or enter a valid response.)")
                }
            }         

            isValid = false
            let color;

            
            while (!isValid) {
                color = ask ("What is your favorite color?")

                // check if color is valid
                if (
                    color.toLowerCase() === "purple"
                ) {
                    isValid = true
                    alert ("You're my real dad!")
                } else if (
                    color.toLowerCase() === "blue"
                ) {
                    isValid = true
                    alert("You're Uncle Richard...sigh.")
                } else {
                    alert("Wrong color. Get out. I don't know you. Seriously...get out. (or enter a valid response)")
                }
            }          

             isValid = false
            let pet;

    
            while (!isValid) {
                pet = ask ("What is your pets name?")

                // check if pet is valid
                if (
                    pet.toLowerCase() === "sunny" ||
                    pet.toLowerCase() === "barron"
                ) {
                    isValid = true
                    alert ("Correct. You may now enter!")
                } else if (
                    pet.toLowerCase() === "winston"
                ) {
                    isValid = true
                    alert("Correct. You may now enter!")
                } else {
                    alert ("Are you serious?...if I already told you to get out, then what are you still doing here?! GET OUT!!! (or enter a valid response.)")
                }
            }