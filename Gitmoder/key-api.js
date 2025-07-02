// Проверка ключа через URL-параметр
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('check')) {
    const key = urlParams.get('check').trim().toUpperCase(); // Нормализация ключа
    
    try {
        // 1. Проверяем локальное хранилище
        const savedKeys = JSON.parse(localStorage.getItem('gitmoder_keys') || '{}');
        const isValid = savedKeys[key] && savedKeys[key] > Date.now();
        
        // 2. Если ключ не найден, можно добавить дополнительную проверку
        // например, через внешний API или базу данных
        
        // Формируем ответ
        const response = {
            valid: isValid,
            key: key,
            expires: isValid ? savedKeys[key] : null,
            timestamp: Date.now()
        };
        
        // Правильный вывод JSON
        document.contentType = "application/json";
        document.write(JSON.stringify(response));
        
    } catch (error) {
        // Обработка ошибок
        document.write(JSON.stringify({
            valid: false,
            error: "Internal server error",
            details: error.message
        }));
    }
} else {
    // Если параметр check отсутствует
    document.write(JSON.stringify({
        valid: false,
        error: "Missing 'check' parameter"
    }));
}
