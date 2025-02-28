const btn = document.querySelectorAll("button");

let buttonClick = false;

btn.forEach(buttons => {
    buttons.addEventListener("click", (event) => {
        let btnValue = event.target.textContent;

        if (btnValue !== "Submit")
        {
            localStorage.setItem("btnValue", btnValue);
            buttonClick = true;
        }

        if (btnValue == "Submit") 
        {
            if (buttonClick == false)
            {
                alert("De uma nota.")
            }
            else
            {
                window.location.href = "./page2.html";
            }
        }
    });
});