document.addEventListener('DOMContentLoaded', function() {
    const customizationForm = document.getElementById('customizationForm');
    const backgroundColorInput = document.getElementById('backgroundColor');
    const fontInput = document.getElementById('font');
    const textSizeInput = document.getElementById('textSize');

    customizationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const customizationData = {
            backgroundColor: backgroundColorInput.value,
            font: fontInput.value,
            textSize: textSizeInput.value
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
        }
    }

    applyCustomizations();
});
