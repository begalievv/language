import React from 'react';
import {useTranslation} from "react-i18next";

function Test(props) {

    const {t} = useTranslation('common');
    return (
        <div>
            {/*{t('namespaceTest')}*/}
        </div>
    );
};

export default Test;