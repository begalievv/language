import React from 'react';
import {useTranslation} from "react-i18next";

function Test(props) {

    const {t} = useTranslation('common');
    return (
        <div>
            {t('translation:namespace1.translateOnNamespace1')}
        </div>
    );
};

export default Test;