document.addEventListener("DOMContentLoaded", function () {
    const inputValue = document.getElementById("inputValue");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const result = document.getElementById("result");
    const convertButton = document.getElementById("convertButton");

    convertButton.addEventListener("click", function () {
        const value = parseFloat(inputValue.value);
        const from = fromUnit.value;
        const to = toUnit.value;

        if (isNaN(value)) {
            result.textContent = "Please enter a valid number.";
            return;
        }

        let convertedValue;
        switch (from) {
            case "meter":
                switch (to) {
                    case "meter":
                        convertedValue = value;
                        break;
                    case "kilometer":
                        convertedValue = (value / 1000).toFixed(2);
                        break;
                    case "mile":
                        convertedValue = (value * 0.000621371).toFixed(2);
                        break;
                    case "yard":
                        convertedValue = (value * 1.09361).toFixed(2);
                        break;
                }
                break;
            case "kilometer":
                switch (to) {
                    case "meter":
                        convertedValue = (value * 1000).toFixed(2);
                        break;
                    case "kilometer":
                        convertedValue = value;
                        break;
                    case "mile":
                        convertedValue = (value * 0.621371).toFixed(2);
                        break;
                    case "yard":
                        convertedValue = (value * 1094).toFixed(2);
                        break;
                }
                break;
            case "mile":
                switch (to) {
                    case "meter":
                        convertedValue = (value / 0.000621371).toFixed(2);
                        break;
                    case "kilometer":
                        convertedValue = (value / 0.621371).toFixed(2);
                        break;
                    case "mile":
                        convertedValue = value;
                        break;
                    case "yard":
                        convertedValue = (value * 1760).toFixed(2);
                        break;
                }
                break;
            case "yard":
                switch (to) {
                    case "meter":
                        convertedValue = (value / 1.09361).toFixed(2);
                        break;
                    case "kilometer":
                        convertedValue = (value / 1094).toFixed(2);
                        break;
                    case "mile":
                        convertedValue = (value / 1760).toFixed(2);
                        break;
                    case "yard":
                        convertedValue = value;
                        break;
                }
                break;
        }

        result.textContent = `Result: ${convertedValue} ${to}`;
    });
});
