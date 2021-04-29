import React, {Component} from 'react';
import {TextField, Container} from "@material-ui/core";
import {withTranslation, Trans} from 'react-i18next';

class Content extends Component {
    render() {
        const {t} = this.props
        return (
            <div>
                <Container maxWidth="sm">
                    <TextField
                        id="outlined-full-width"
                        label={t('label')}
                        required="true"
                        placeholder={t('placeholder')}
                        helperText={t('fullwidth')}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-full-width"
                        label={t('label')}
                        required="true"
                        placeholder={t('placeholder')}
                        helperText={t('fullwidth')}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-full-width"
                        label={t('label')}
                        required="true"
                        placeholder={t('placeholder')}
                        helperText={t('fullwidth')}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </Container>
            </div>
        );
    }
}

export default withTranslation()(Content);