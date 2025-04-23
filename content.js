(async function() {
    const response = await fetch(chrome.runtime.getURL('safeList.json')); //загружаем сэйфлист
    const list = await response.json();
    const currentURL = window.location.hostname;  //определяем адрес сайта

    if (list.safe.includes(currentURL)) {
        alert("😍 Это проверенный dApp: " + currentURL);  //проверяем есть ли юрл в сейф
    } else if (list.scam.includes(currentURL)) {
        alert("😥 Небезопасный сайт! " + currentURL);  //выводим скам
    } else {
        alert("😬 Адрес " + currentURL + " не найден в базе. Будьте осторожны!");  //если адреса не оказалось в базе
    }

    // мб добавить проверку при вызове метода для привязки кошелька

})();
