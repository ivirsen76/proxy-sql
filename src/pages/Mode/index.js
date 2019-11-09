import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModeAndSave } from "reducers/main.js";
import { modes } from "../../config.js";
import Loader from 'components/Loader';
import classnames from "classnames";

export default props => {
    const mode = useSelector(state => state.mode);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    return (
        <Loader loading={loading}>
            <h2>Mode</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                ipsa laboriosam architecto neque corrupti vel quam illum, amet
                facere, deleniti, soluta ut quidem dolore beatae ipsam. Iste
                consequatur quod, tenetur in nemo esse amet officiis veritatis,
                voluptatibus voluptates. Est quis ad laborum consequatur sint
                consectetur quibusdam, natus voluptas quisquam sunt quas saepe
                animi labore cum doloribus odit velit rerum. Quas fugiat, quidem
                sed, pariatur perspiciatis vitae sunt animi non id minus
                adipisci, rerum quod. Omnis autem voluptatibus dicta beatae
                ratione, unde iusto voluptate enim doloribus amet expedita odit,
                sunt quisquam laboriosam reiciendis rerum labore corporis
                maxime, et impedit optio dolore.
            </p>
            <div className="btn-group" role="group" aria-label="Basic example">
                {modes.map(item => (
                    <button
                        key={item.value}
                        type="button"
                        className={classnames("btn", {
                            "btn-primary active": item.value === mode,
                            "btn-light": item.value !== mode
                        })}
                        onClick={async () => {
                            setLoading(true)
                            await dispatch(setModeAndSave(item.value));
                            setLoading(false)
                        }}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </Loader>
    );
};
