import React from 'react';
import {useTranslation, Trans} from "react-i18next";

function Test() {
    const {t} = useTranslation(['common', 'labels']);
    const translate = t;
    return (
        <div>
			<Trans>Welcome to <strong>React</strong></Trans>
			<p>{translate('translation:namespace1.translateOnNamespace1')}</p>
			<p>{translate('label1')}</p>
			<p>{translate('namespaceTest')}</p>
        </div>
    );
};

export default Test;