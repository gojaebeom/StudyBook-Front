import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import mainReducer from './_reducers';
import {Provider} from 'react-redux';


const store = createStore(
    mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// let delay = false;
// const inputChangeEvent = (e) => {
//     const { name, value } = e.target;

//     if (delay) {
//         console.log(`${delay} 삭제`);
//         clearTimeout(delay);
//     }

//     const newTimer = setTimeout(() => {
//         console.log("hello");
//         if(name === "title") dispatch({type: "POST_CREATE_STATE_CHANGE", payload: {...postCreateState, title: value}});
//         else if(name === "tagString") {
//             if(value === " "){
//                 return alert("")
//             }
//             dispatch({type: "POST_CREATE_STATE_CHANGE", payload: {...postCreateState, tags: value}});
//         }
//     }, 1000);

//     delay = newTimer;
// }
