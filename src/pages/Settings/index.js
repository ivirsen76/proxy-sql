import React from "react";
import { Formik, Field, Form } from "formik";
import FormikInput from "components/FormikInput";
import { useSelector, useDispatch } from "react-redux";
import { setDatabase } from "reducers/main.js";
import notification from "helpers/notification";

export default () => {
    const database = useSelector(state => state.database);
    const dispatch = useDispatch();

    const onSubmit = values => {
        console.log(values);
        dispatch(setDatabase(values));
        notification("Settings has been updated");
    };

    return (
        <div>
            <h2>Settings</h2>
            <div style={{ maxWidth: "400px" }}>
                <Formik
                    initialValues={database}
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
                                {isSubmitting ? 'Submitting' : 'Submit'}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
