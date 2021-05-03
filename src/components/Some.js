import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
import i18n from "i18next";

class Some extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props
        const translate = t
        const c = 123453453.54

        return (
            <div>

                {translate("format_date", { value: new Date(2022, 2,23,21,32,4) })}
                <p>{translate("format_hours", { value: new Date(2022, 2,23,21,32,4) })}</p>
                <p>{translate("format_currency", {value: c})}</p>
                <p>{translate("format_number", {value: c})}</p>
                <p>{i18n.t("common:namespaceTest")}</p>
                <p>{translate("namespace1.translateOnNamespace1")}</p>

            </div>
        );
    }
}

export default withTranslation()(Some);