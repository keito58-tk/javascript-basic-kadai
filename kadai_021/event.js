const text = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});