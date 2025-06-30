// Проверка ключа через URL-параметр
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('check')) {
    const key = urlParams.get('check');
    const validKeys = JSON.parse(localStorage.getItem('gitmoder_keys') || '{}');
    const isValid = validKeys[key] && validKeys[key] > Date.now();
    
    // Возвращаем ответ в формате JSON
    const response = {
        valid: isValid,
        key: key,
        expires: isValid ? validKeys[key] : null
    };
    
    document.write(JSON.stringify(response));
}
