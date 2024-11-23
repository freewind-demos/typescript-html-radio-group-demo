
const radioButtons = document.querySelectorAll('input[name="fruit"]');
const result = document.getElementById('result');

radioButtons.forEach(radio => {
    radio.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLInputElement;
        result!.textContent = `你选择了: ${target.value}`;
    });
});
