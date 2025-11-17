const getData = () => {
    return fetch('https://test-6f9f7-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        })

}

export default getData