const postData = (cart) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(cart),
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