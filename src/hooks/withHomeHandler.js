import axios from "axios";
import React, { useEffect, useState } from "react";

const withHomeHandler = Home => { 
    const Component = () => { 

        const [state, setState] = useState([]);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        useEffect(async () => {
            const res = await axios.get("/api/naver/news")
                .then(data => data)
                .catch(err => {
                    console.log(err.response);
                    throw new Error(err);
                });
            console.log(res);

            setState(res.data);

        }, []);

        return <Home news={state} />; 

    }; 
    return Component;
};
export default withHomeHandler;