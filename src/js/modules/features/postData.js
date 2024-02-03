export async function postData(data) {
    try {
        const response = await fetch(
            'http://localhost:5500/',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
            },
        );
        if (!response.ok) {
            throw new Error('Http request failed');
        }

        return await response.json();
    } catch (e) {
        throw new Error(e);
    }
}
