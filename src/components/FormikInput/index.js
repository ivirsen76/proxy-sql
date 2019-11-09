import React from 'react';
import _pick from 'lodash/pick';
import FormikFieldWrapper from '../FormikFieldWrapper';

export default props => {
    const domProps = _pick(props, ['autoFocus', 'autoComplete', 'type', 'style', 'id']);
    const field = {
        ...props.field,
        value: props.field.value || '',
    };

    return (
        <FormikFieldWrapper {...props}>
            <input className="form-control" {...field} {...domProps} />
        </FormikFieldWrapper>
    );
}
