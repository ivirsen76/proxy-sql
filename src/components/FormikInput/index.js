import React from "react";
import _pick from "lodash/pick";
import FormikFieldWrapper from "../FormikFieldWrapper";

export default props => {
    const domProps = _pick(props, [
        "autoFocus",
        "autoComplete",
        "type",
        "style",
        "id"
    ]);
    const field = {
        ...props.field,
        value: props.field.value || ""
    };
    const error = props.form.errors[field.name];
    const showError = error && props.form.submitCount > 0;

    return (
        <FormikFieldWrapper {...props}>
            <input
                className={"form-control " + (showError ? "is-invalid" : "")}
                {...field}
                {...domProps}
            />
        </FormikFieldWrapper>
    );
};
