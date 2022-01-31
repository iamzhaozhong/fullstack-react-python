import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    toolbarTitle: {
        flexGrow: 1,
    },
}));

function Header() {
    const classes = useStyles();
    let navigate = useNavigate();
    const [data, setData] = useState({ search: '' });

    const goSearch = (e) => {
        navigate.push({
            pathname: '/search/',
            search: '?search=' + data.search,
        });
        window.location.reload();
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        <Link
                            component={NavLink}
                            to="/"
                            underline="none"
                            color="textPrimary"
                        >
                            Blog
                        </Link>
                    </Typography>
                    <Autocomplete
                        id="search"
                        renderInput={() => <TextField value={data.search}
                                                            onChange={(newValue) => setData({ search: newValue })}
                                                            onRequestSearch={() => goSearch(data.search)} />}
                    />
                    <nav>
                        <Link
                            color="textPrimary"
                            href="#"
                            className={classes.link}
                            component={NavLink}
                            to="/register"
                        >
                            Register
                        </Link>
                    </nav>
                    <Button
                        href="#"
                        color="primary"
                        variant="outlined"
                        className={classes.link}
                        component={NavLink}
                        to="/login"
                    >
                        Login
                    </Button>
                    <Button
                        href="#"
                        color="primary"
                        variant="outlined"
                        className={classes.link}
                        component={NavLink}
                        to="/logout"
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Header;
