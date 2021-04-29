import React from 'react';
import {useTranslation, Trans} from 'react-i18next';
import Header from "./components/Header";
import Content from "./components/Content";

export default function App() {
    const {t, i18n} = useTranslation();
    const changeLanguage = (language) => {
        console.log(language)
        i18n.changeLanguage(language)
    }

    return (
        <div>
            <Header changeLanguage={changeLanguage}/>
            <Content changeLanguage={changeLanguage}/>

        </div>
    )
}