import React from 'react';
import {useTranslation} from "react-i18next";

function Test(props) {

    const {t} = useTranslation('common');
    const translate = t;
    return (
        <div>
            <p>{translate('translation:namespace1.translateOnNamespace1')}</p>
            <p>{translate('namespaceTest')}</p>
        </div>
    );
};

export default Test;