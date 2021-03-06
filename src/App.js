import React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Some from "./components/Some";
import i18n from "i18next";
import Test from "./components/Test";

export default function App() {
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return (
        <div>
            <Header changeLanguage={changeLanguage}/>
            <Content/>
			<Test/>
            <Some/>

        </div>
    )
}