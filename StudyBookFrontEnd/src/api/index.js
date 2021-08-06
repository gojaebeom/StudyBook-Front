import axios from "axios";



export async function apiScaffold({METHOD, URL, DATA=null}){
    console.log(DATA);
    return await axios({
        method: METHOD,
        url: URL,
        withCredentials: true,
        headers: {
            "Authorization":`bearer ${window.localStorage.getItem("act")}`,
        },
        data: DATA,
    })
    .then(data => data.data)
    .catch(err => {
        const {message, status} = err.response.data;
        alert(`CODE: ${status}\n${message}`);
        throw new Error(message);
    });
}

