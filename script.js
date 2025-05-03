// 處理登入表單提交
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('登入成功！');
    }
});

const languageToggle = document.getElementById('languageToggle');
const languageDropdown = document.querySelector('.language-dropdown');

languageToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    languageDropdown.style.display =
        languageDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function() {
    languageDropdown.style.display = 'none';
});

document.querySelector('.password-toggle').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    const eyeSlashIcon = document.getElementById('eyeSlashIcon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.style.display = 'inline';
        eyeSlashIcon.style.display = 'none';
    } else {
        passwordInput.type = 'password';
        eyeIcon.style.display = 'none';
        eyeSlashIcon.style.display = 'inline';
    }
});