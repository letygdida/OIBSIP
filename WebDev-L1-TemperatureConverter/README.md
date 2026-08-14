# Temperature Converter

A responsive temperature conversion web application developed as part of the OASIS INFOBYTE Web Development Internship — Level 1 Task 3.

## Features

- Convert temperatures between Celsius, Fahrenheit, and Kelvin
- Numeric input validation
- Absolute-zero validation
- Clear error messages
- Responsive design for desktop and mobile
- Convert button with instant results
- Reset button
- Clean and modern user interface
- Press Enter to perform a conversion

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Conversion Formulas

### Celsius

- Fahrenheit = (Celsius × 9/5) + 32
- Kelvin = Celsius + 273.15

### Fahrenheit

- Celsius = (Fahrenheit − 32) × 5/9
- Kelvin = Celsius + 273.15

### Kelvin

- Celsius = Kelvin − 273.15
- Fahrenheit = (Celsius × 9/5) + 32

## Validation

The application prevents temperatures below absolute zero:

- Celsius: -273.15°C
- Fahrenheit: -459.67°F
- Kelvin: 0 K

## Project Structure

```text
WebDev-L1-TemperatureConverter/
├── index.html
├── style.css
├── script.js
└── README.md