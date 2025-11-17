const postData = () => {
    return fetch('http://localhost:3002/goods', {
        method: 'POST',
        body: JSON.stringify({
            title: "Witcher 3. Wild hunt",
            price: 3000,
            sale: true,
            img: "https://cdn1.ozone.ru/multimedia/c400/1024822131.jpg",
            hoverImg: "https://cdn1.ozone.ru/multimedia/c400/1024822128.jpg",
            category: "Игры и софт"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        /* return fetch('http://localhost:3002/goods/98bb', {
             method: 'DELETE',
         })*/
        .then(res => res.json())
}

export default postData