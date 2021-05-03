import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useTranslation, Trans} from 'react-i18next';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl, MenuItem, Select,
    TextField
} from "@material-ui/core";
import i18n from "i18next";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Header(props) {
    const {t, i18n} = useTranslation();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState(i18n.language);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setAge(event.target.value);
        props.changeLanguage(event.target.value)
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                className={classes.selectEmpty}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >

                                <MenuItem value={'en-US'}>{t('languageEn')}</MenuItem>
                                <MenuItem value={'ru-RU'}>{t('languageRu')}</MenuItem>
                                <MenuItem value={'ky-KG'}>{t('languageKy')}</MenuItem>
                                <MenuItem value={'uk-UA'}>{t('languageUa')}</MenuItem>

                            </Select>
                        </FormControl>
                    </Typography>

                    <Button color="inherit" onClick={handleClickOpen}>{t('login')}</Button>
                </Toolbar>
            </AppBar>
            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">{t('authorization')}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {t('description')}
                        </DialogContentText>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label={t('email')}
                            type="email"
                            fullWidth
                            required="true"
                            variant="outlined"
                        />

                        <TextField
                            margin="dense"
                            id="name"
                            label={t('password')}
                            type="email"
                            fullWidth
                            required="true"
                            variant="outlined"
                        />
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            {t('cancel')}
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            {t('confirm')}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}