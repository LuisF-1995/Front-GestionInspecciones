import axios from 'axios';


export async function sendGetRequest (endpoint:string, token?:string):Promise<any> {
    let headers = {}

    if (token && token.length > 0) {
        headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    else{
        headers = {
            'Content-Type': 'application/json'
        }
    }

    try {
        const response = await axios.get(endpoint, headers);
        return response.data;
    } 
    catch (error) {
        throw new Error('No se pudo obtener la información de la API');
    }
}

export async function sendPostRequest (endpoint:string, bodyData:any, token?:string):Promise<any> {
    try {
        let headers = {}

        if (token && token.length > 0) {
            headers = {
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:3000',
                'Authorization': `Bearer ${token}`
            }
        }
        else{
            headers = {
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:3000',
            }
        }

        const response = await axios.post(endpoint, bodyData,  headers );
        return response.data;
    } 
    catch (error) {
        console.error('Error al enviar la solicitud POST:', error);
        throw error;
    }
}

export async function sendPutRequest (endpoint:string, dataUpdate:any, token?:string){
    let headers = {}

    if (token && token.length > 0) {
        headers = {
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:3000',
            'Authorization': `Bearer ${token}`
        }
    }
    else{
        headers = {
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:3000',
        }
    }

    axios
    .put(endpoint, dataUpdate, headers)
    .then((response) => {
        console.log('Respuesta de la API:', response.data);
    })
    .catch((error) => {
        console.error('Error al enviar datos:', error);
    });
}