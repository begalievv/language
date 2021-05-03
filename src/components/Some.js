import React, {Component} from 'react';
import {withTranslation, Trans} from 'react-i18next';
import i18n from "i18next";

class Some extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props
        const c = 1234.54

        return (
            <div>

                {t("format_date", { value: new Date(2022, 2,23,21,32,4) })}
                <p>{t("format_hours", { value: new Date(2022, 2,23,21,32,4) })}</p>
                <p>{t("format_currency", {value: c})}</p>
                <p>{t("format_number", {value: c})}</p>

            </div>
        );
    }
}

export default withTranslation()(Some);