import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {Test} from "./components/Test";
import "./styles/index.scss"
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>switch theme</button>

            <Test/>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;