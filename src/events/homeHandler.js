import axios from "axios";
import React, { useEffect, useState } from "react";

const homeHandler = Home => { 
    const Component = () => { 

        const [state, setState] = useState([]);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        useEffect(async () => {
            const res = await axios.get("/api/naver/news")
                .then(data => data)
                .catch(err => {
                    throw new Error(err);
                });
            console.log(res);

            setState(res.data);

        }, []);

        return <Home news={state} />; 

    }; 
    return Component;
};
export default homeHandler;