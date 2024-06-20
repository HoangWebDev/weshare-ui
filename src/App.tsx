import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '~/styles/App.css';
import Header from '~/components/Header/Header';
import Main from '~/pages/Main/Main';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/*" element={<Main />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
