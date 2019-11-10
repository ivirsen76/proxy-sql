import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setConfigAndSave } from 'reducers/main.js';
import { modes } from '../../config.js';
import Loader from 'components/Loader';
import classnames from 'classnames';

export default props => {
    const { mode } = useSelector(state => state.config);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    return (
        <Loader loading={loading}>
            <h2>Mode</h2>
            <p>Here you can change proxy mode.</p>
            <div className="btn-group" role="group" aria-label="Basic example">
                {modes.map(item => (
                    <button
                        key={item.value}
                        type="button"
                        className={classnames('btn', {
                            'btn-primary active': item.value === mode,
                            'btn-light': item.value !== mode,
                        })}
                        onClick={async () => {
                            setLoading(true);
                            await dispatch(setConfigAndSave({ mode: item.value }));
                            setLoading(false);
                        }}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </Loader>
    );
};
