const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            display.value = "";
        }
        else if (value === "⌫") {
            display.value = display.value.slice(0, -1);
        }
        else if (value === "=") {
            try {
                if (display.value.includes("/0")) {
                    display.value = "Error";
                    return;
                }

                let result = eval(display.value);

                if (!isFinite(result)) {
                    display.value = "Error";
                } else {
                    display.value = result;
                }
            } catch {
                display.value = "Error";
            }
        }
        else {
            if (display.value === "Error") {
                display.value = "";
            }
            display.value += value;
        }
    });
});