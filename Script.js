document.addEventListener('DOMContentLoaded', function() {
    const customizationForm = document.getElementById('customizationForm');
    const backgroundColorInput = document.getElementById('backgroundColor');
    const fontInput = document.getElementById('font');
    const textSizeInput = document.getElementById('textSize');
    const textColorInput = document.getElementById('textColor'); // P0bae
    const borderStyleInput = document.getElementById('borderStyle'); // P0bae

    customizationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const customizationData = {
            backgroundColor: backgroundColorInput.value,
            font: fontInput.value,
            textSize: textSizeInput.value,
            textColor: textColorInput.value, // Pfc94
            borderStyle: borderStyleInput.value // Pfc94
        };

        localStorage.setItem('customizationData', JSON.stringify(customizationData));

        alert('Customization saved!');
    });

    function applyCustomizations() {
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

            if (customizationData.textColor) { // Pd59e
                document.body.style.color = customizationData.textColor; // Pd59e
            }

            if (customizationData.borderStyle) { // Pd59e
                document.getElementById('content').style.borderStyle = customizationData.borderStyle; // Pd59e
            }
        }
    }

    applyCustomizations();
});
