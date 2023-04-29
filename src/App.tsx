import React, { useState } from 'react';

import './App.css';
import Header from './Components/Latout/Header/Header';
import Menu from './Components/Latout/Menu/Menu';
import Footer from './Components/Latout/Footer/Footer';
import Main from './Components/Latout/Main/Main';





function App() {

    
    return (
        <div className="App">
        
            <Header />
            <Menu />
            <Main/>
            <Footer />
        </div>
    );
}

export default App;
