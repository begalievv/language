import React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Some from "./components/Some";
import i18n from "i18next";

export default function App() {
    const changeLanguage = (language) => {
        console.log(language)
        i18n.changeLanguage(language)
    }

    return (
        <div>
            <Header changeLanguage={changeLanguage}/>
            <Content changeLanguage={changeLanguage}/>
            <Some/>

        </div>
    )
}