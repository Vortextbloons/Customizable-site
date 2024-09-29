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

        if (customizationData.textColor) {
            document.body.style.color = customizationData.textColor;
        }

        if (customizationData.borderStyle) {
            document.getElementById('content').style.borderStyle = customizationData.borderStyle;
        }
    }
}

window.addEventListener('load', function() {
    const customizationForm = document.getElementById('customizationForm');
    const backgroundColorInput = document.getElementById('backgroundColor');
    const fontInput = document.getElementById('font');
    const textSizeInput = document.getElementById('textSize');
    const textColorInput = document.getElementById('textColor');
    const borderStyleInput = document.getElementById('borderStyle');

    customizationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const customizationData = {
            backgroundColor: backgroundColorInput.value,
            font: fontInput.value,
            textSize: textSizeInput.value,
            textColor: textColorInput.value,
            borderStyle: borderStyleInput.value
        };

        localStorage.setItem('customizationData', JSON.stringify(customizationData));

        alert('Customization saved!');
    });

    applyCustomizations();
});
