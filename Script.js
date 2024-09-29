document.addEventListener('DOMContentLoaded', function() {
    const customizationForm = document.getElementById('customizationForm');
    const backgroundColorInput = document.getElementById('backgroundColor');
    const fontInput = document.getElementById('font');
    const textSizeInput = document.getElementById('textSize');

    customizationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const backgroundColor = backgroundColorInput.value;
        const font = fontInput.value;
        const textSize = textSizeInput.value;

        localStorage.setItem('backgroundColor', backgroundColor);
        localStorage.setItem('font', font);
        localStorage.setItem('textSize', textSize);

        alert('Customization saved!');
    });

    function applyCustomizations() {
        const backgroundColor = localStorage.getItem('backgroundColor');
        const font = localStorage.getItem('font');
        const textSize = localStorage.getItem('textSize');

        if (backgroundColor) {
            document.body.style.backgroundColor = backgroundColor;
        }

        if (font) {
            document.body.style.fontFamily = font;
        }

        if (textSize) {
            document.body.style.fontSize = textSize + 'px';
        }
    }

    applyCustomizations();
});
