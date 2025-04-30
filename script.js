document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('登入成功！');
    } else {
        alert('請輸入帳號名稱和密碼！');
    }
});

document.getElementById('languageToggle').addEventListener('click', function () {
    const dropdown = document.querySelector('.language-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function (e) {
    const languageSelector = document.querySelector('.language-selector');
    const dropdown = document.querySelector('.language-dropdown');
    if (!languageSelector.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});