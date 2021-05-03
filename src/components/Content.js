import React, {Component} from 'react';
import {TextField, Container} from "@material-ui/core";
import {withTranslation} from 'react-i18next';

class Content extends Component {
    render() {
        const {t} = this.props
        const translate = t
        return (
            <div>
                <Container maxWidth="sm">
                    <TextField
                        id="outlined-full-width"
                        label={translate('label')}
                        required="true"
                        placeholder={translate('placeholder')}
                        helperText={translate('fullwidth')}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-full-width"
                        label={translate('label')}
                        required="true"
                        placeholder={translate('placeholder')}
                        helperText={translate('fullwidth')}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-full-width"
                        label={translate('label')}
                        required="true"
                        placeholder={translate('placeholder')}
                        helperText={translate('fullwidth')}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                </Container>
            </div>
        );
    }
}

export default withTranslation()(Content);