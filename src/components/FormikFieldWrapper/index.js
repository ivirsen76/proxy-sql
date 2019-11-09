import React from 'react';

export default ({field, form, label, children}) => {
    const error = form.errors[field.name];
    const showError = error && form.submitCount > 0;

    return (
        <div className="form-group">
            {label && (
                <label className="control-label" htmlFor={field.name}>
                    {label}
                </label>
            )}
            {children}
            {showError && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}
