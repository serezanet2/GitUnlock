// Получаем ключ из URL (например: ?key=XXXX-XXXX-XXXX)
const urlParams = new URLSearchParams(window.location.search);
const inputKey = urlParams.get('key');

// Достаём сохранённые ключи из localStorage
const savedKeys = JSON.parse(localStorage.getItem('savedKeys') || '[]');

// Проверяем, есть ли ключ в списке и не истёк ли он
const isValidKey = savedKeys.some(keyData => 
    keyData.key === inputKey && 
    keyData.expiration > Date.now()
);

// Отправляем ответ
document.write(isValidKey ? "valid" : "invalid");