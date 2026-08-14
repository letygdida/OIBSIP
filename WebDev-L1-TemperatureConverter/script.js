// =========================
// ELEMENTS
// =========================

const temperatureInput =
    document.getElementById("temperature");

const unitSelect =
    document.getElementById("unit");

const convertBtn =
    document.getElementById("convertBtn");

const resetBtn =
    document.getElementById("resetBtn");

const errorMessage =
    document.getElementById("errorMessage");

const celsiusResult =
    document.getElementById("celsiusResult");

const fahrenheitResult =
    document.getElementById("fahrenheitResult");

const kelvinResult =
    document.getElementById("kelvinResult");


// =========================
// CONVERT BUTTON
// =========================

convertBtn.addEventListener("click", convertTemperature);


// =========================
// ENTER KEY
// =========================

temperatureInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        convertTemperature();
    }

});


// =========================
// CONVERSION FUNCTION
// =========================

function convertTemperature() {

    clearError();

    const inputValue =
        temperatureInput.value.trim();

    const selectedUnit =
        unitSelect.value;


    // Empty input
    if (inputValue === "") {

        showError(
            "Please enter a temperature value."
        );

        return;
    }


    const temperature =
        Number(inputValue);


    // Non-numeric input
    if (!Number.isFinite(temperature)) {

        showError(
            "Please enter a valid numeric temperature."
        );

        return;
    }


    let celsius;
    let fahrenheit;
    let kelvin;


    // =========================
    // CELSIUS
    // =========================

    if (selectedUnit === "celsius") {

        celsius = temperature;

        if (celsius < -273.15) {

            showError(
                "Temperature cannot be below absolute zero (-273.15°C)."
            );

            return;
        }

        fahrenheit =
            (celsius * 9 / 5) + 32;

        kelvin =
            celsius + 273.15;
    }


    // =========================
    // FAHRENHEIT
    // =========================

    else if (selectedUnit === "fahrenheit") {

        fahrenheit = temperature;

        if (fahrenheit < -459.67) {

            showError(
                "Temperature cannot be below absolute zero (-459.67°F)."
            );

            return;
        }

        celsius =
            (fahrenheit - 32) * 5 / 9;

        kelvin =
            celsius + 273.15;
    }


    // =========================
    // KELVIN
    // =========================

    else if (selectedUnit === "kelvin") {

        kelvin = temperature;

        if (kelvin < 0) {

            showError(
                "Kelvin cannot be below 0 K."
            );

            return;
        }

        celsius =
            kelvin - 273.15;

        fahrenheit =
            (celsius * 9 / 5) + 32;
    }


    // =========================
    // DISPLAY RESULTS
    // =========================

    celsiusResult.textContent =
        formatNumber(celsius);

    fahrenheitResult.textContent =
        formatNumber(fahrenheit);

    kelvinResult.textContent =
        formatNumber(kelvin);

}


// =========================
// FORMAT NUMBER
// =========================

function formatNumber(number) {

    return Number(number.toFixed(2));
}


// =========================
// ERROR FUNCTIONS
// =========================

function showError(message) {

    errorMessage.textContent =
        message;
}


function clearError() {

    errorMessage.textContent =
        "";
}


// =========================
// RESET
// =========================

resetBtn.addEventListener("click", function () {

    temperatureInput.value = "";

    unitSelect.value = "celsius";

    celsiusResult.textContent = "—";

    fahrenheitResult.textContent = "—";

    kelvinResult.textContent = "—";

    clearError();

    temperatureInput.focus();

});