import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {useHistory} from 'react-router-dom';
import {TextField, Button, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";
import {connect} from "react-redux";
import * as yup from "yup";

import {addUser} from "../../actions";

const passwordErrorText = "password must contain at least 1 of each uppercase/lowercase character, number, symbol"

const validationSchema = yup.object().shape({
    username:
        yup
        .string()
        .required()
        .max(15)
        .min(1),
    password: 
        yup
        .string('must be a string')
        .required()
        .max(100)
        .min(4)
        .matches(/[0-9]/, passwordErrorText)
        .matches(/[A-Z]/, passwordErrorText)
        .matches(/[a-z]/, passwordErrorText)
        .matches(/[-+_!@#$%^&*.,?]/, passwordErrorText),
        passwordConfirmation:
        yup.string()
        .oneOf([yup.ref('password'), null], "passwords must match"),
    email:
        yup
        .string()
        .required()
        .email(),
})

const useStyles = makeStyles(() => {
    return {
        "container": {
            overflow: "scroll",
            height: "80vh",
            display: "flex",
            flexflow: "column",
            alignItems: "center",
            overflowY: "scroll"
        },
        "form": {
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            justifyContent: "center",
            "& div": {
                margin: "4%",
                "& input": {
                    padding: "7.5% 4%"
                }
            },
            "& button": {
                margin: "5% 0"
            }
        },
        "error": {
            fontSize: "50%",
            color: "red"
        }
    }
})

const Signup = props => {
    const [data, setData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    })

    const classes = useStyles();
    const history = useHistory();

    const handleSubmit = (values, {setSubmitting}) => {
        setSubmitting(true);
        props.addUser(data);
        setSubmitting(false);
        history.push('dashboard');
    }
    return (
        <div className={classes["container"]}>
            <Typography variant="h5">Register Below</Typography>
            <Formik
            initialValues={{}}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
                {({ isSubmitting, isValid, values, ...helpers}) => (
                    <Form className={classes["form"]}>
                        <Field name='username' label='username' variant='outlined' id='outlined-basic' type='text' as={TextField} />
                        <ErrorMessage name="username" render={msg => <div> className={classes["error"]}</div>} />
                        <Field name='password' label='password' variant='outlined' id='outlined-basic' type='text' as={TextField} />
                        <ErrorMessage name="password" render={msg => <div> className={classes["error"]}</div>} />
                        <Field name='confirm password' label='confirm password' variant='outlined' id='outlined-basic' type='text' as={TextField} />
                        <ErrorMessage name="confirm password" render={msg => <div> className={classes["error"]}</div>} />
                        <Field name='email' label='email' variant='outlined' id='outlined-basic' type='text' as={TextField} />
                        <ErrorMessage name="email" render={msg => <div> className={classes["error"]}</div>} />
                        <Button onClick={() => (handleSubmit(values, {...helpers}))} type="submit" disabled={!isValid || isSubmitting || false}>Register</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default connect(null, {addUser})(Signup);