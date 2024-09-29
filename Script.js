function saveCustomization(event) {
    event.preventDefault();

    const customizationData = {
        backgroundColor: document.getElementById('backgroundColor').value,
        font: document.getElementById('font').value,
        textSize: document.getElementById('textSize').value,
        textColor: document.getElementById('textColor').value,
        borderStyle: document.getElementById('borderStyle').value
    };

    localStorage.setItem('customizationData', JSON.stringify(customizationData));

    alert('Customization saved!');
}

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
    applyCustomizations();
});
