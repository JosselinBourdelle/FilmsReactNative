
export const getDataFromServer = async (callback) => {
    console.log('get data in server')
    fetch('http://192.168.10.144:8080/trailers')
        .then(response => response.json())
        .then(data => {
                console.log('get data in server')
                data.sort(function(a, b){
                    if(a.title < b.title) { return -1; }
                    if(a.title > b.title) { return 1; }
                    return 0;
                })
                console.log('return data from server')
                callback(data)
            }
        )
        .catch(e => {console.log(e);})
}
