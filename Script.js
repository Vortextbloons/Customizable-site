document.addEventListener('DOMContentLoaded', function() {
    // This event listener waits for the entire HTML document to be loaded and parsed before executing the code inside it.
    const customizationForm = document.getElementById('customizationForm');
    const backgroundColorInput = document.getElementById('backgroundColor');
    const fontInput = document.getElementById('font');
    const textSizeInput = document.getElementById('textSize');
    const textColorInput = document.getElementById('textColor');
    const borderStyleInput = document.getElementById('borderStyle');

    customizationForm.addEventListener('submit', function(event) {
        // This event listener prevents the default form submission behavior and saves the customization data to local storage.
        event.preventDefault();

        const customizationData = {
            // Object to store the customization data from the form inputs.
            backgroundColor: backgroundColorInput.value,
            font: fontInput.value,
            textSize: textSizeInput.value,
            textColor: textColorInput.value,
            borderStyle: borderStyleInput.value
        };

        localStorage.setItem('customizationData', JSON.stringify(customizationData));

        alert('Customization saved!');
    });

    function applyCustomizations() {
        // This function retrieves the customization data from local storage and applies it to the page.
        const customizationData = JSON.parse(localStorage.getItem('customizationData'));

        if (customizationData) {
            if (customizationData.backgroundColor) {
                document.body.style.backgroundColor = customizationData.backgroundColor;
            }

            if (customizationData.font) {
                document.body.style.fontFamily = customizationData.font;
            }

            if (customizationData.textSize) {
                document.body.style.fontSize = customizationData.textSize + 'px';
            }

            if (customizationData.textColor) {
                document.body.style.color = customizationData.textColor;
            }

            if (customizationData.borderStyle) {
                document.getElementById('content').style.borderStyle = customizationData.borderStyle;
            }
        }
    }

    applyCustomizations();
});
