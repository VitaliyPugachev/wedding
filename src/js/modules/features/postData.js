export async function postData(data){
    try {
        const response = await fetch(
            'http://localhost:5500/', 
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            },
        )
        console.log(response.status);
        if(!response.ok) {
            console.log('Response status not ok');
        }

        return await response.json()
    } catch(e) {
        console.log(e);
    }
}

