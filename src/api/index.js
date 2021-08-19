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
        const status = err.response.status;
        const message = err.response.statusText;
        // throw new Error(message);
        return {message, status};
    });
}

