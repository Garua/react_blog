import 'antd/dist/antd.less'
import './components/Header/index.less'
import React from 'react'
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {

    return (
        <div>
            <Header/>
            <Main/>
        </div>
    )

}


export default App;
