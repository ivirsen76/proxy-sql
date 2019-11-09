import React from "react";
import { Formik, Field, Form } from "formik";
import FormikInput from "components/FormikInput";
import { useSelector, useDispatch } from "react-redux";
import { setDatabaseAndSave } from "reducers/main.js";
import notification from "helpers/notification";
import * as yup from "yup";

const validationSchema = yup.object().shape({
    hostname: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
    port: yup.string().required()
});

export default () => {
    const database = useSelector(state => state.database);
    const dispatch = useDispatch();

    const onSubmit = async values => {
        await dispatch(setDatabaseAndSave(values));
        notification("Settings has been updated");
    };

    return (
        <div>
            <h2>Settings</h2>
            <div style={{ maxWidth: "400px" }}>
                <Formik
                    initialValues={database}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field
                                name="hostname"
                                component={FormikInput}
                                label="Hostname"
                            />
                            <Field
                                name="username"
                                component={FormikInput}
                                label="Username"
                            />
                            <Field
                                name="password"
                                component={FormikInput}
                                type="password"
                                label="Password"
                            />
                            <Field
                                name="port"
                                component={FormikInput}
                                label="Port"
                            />

                            <button
                                className="btn btn-primary"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-2" />}
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
