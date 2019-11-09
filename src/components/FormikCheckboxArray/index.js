import React from 'react';
import FormikFieldWrapper from '../FormikFieldWrapper';
import _xor from 'lodash/xor';

export default props => {
    const { form, field } = props;
    const selectedValues = field.value || [];

    const onChange = event => {
        form.setFieldValue(field.name, _xor(selectedValues, [Number(event.target.value)]));
    };

    return (
        <FormikFieldWrapper {...props}>
            {props.options.map(option => (
                <div key={option.value} className="form-check">
                    <label className="form-check-label">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={option.value}
                            checked={selectedValues.includes(option.value)}
                            onChange={onChange}
                        />
                        {option.label}
                    </label>
                </div>
            ))}
        </FormikFieldWrapper>
    );
};
