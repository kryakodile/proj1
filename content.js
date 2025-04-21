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

    // // Перехват запросов MetaMask на авторизацию
    // if (window.ethereum) {
    //     const originalRequest = window.ethereum.request;
    //     window.ethereum.request = async function(args) {
    //         if (args && args.method === "eth_requestAccounts") {
    //             if (list.safe.includes(currentURL)) {
    //                 alert(" Это проверенный dApp: " + currentURL);
    //             } else if (list.scam.includes(currentURL)) {
    //                 alert(" ВНИМАНИЕ! Это сайт из списка скамов: " + currentURL);
    //             } else {
    //                 alert(" Адрес " + currentURL + " не найден в базе. Будьте осторожны!");
    //             }
    //         }
    //         return originalRequest.apply(this, arguments);
    //     };
    // }
})();
