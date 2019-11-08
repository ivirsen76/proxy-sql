import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import style from "./notification.module.css";

const Alert = ({
    message = "Are you sure?",
    type = "success",
    duration = 5000,
    cleanup
}) => {
    const [rightPosition, setRightPosition] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setRightPosition('0px');
        });

        if (duration > 0) {
            setTimeout(abort, duration);
        }
    }, []);

    const abort = () => {
        setRightPosition('-310px');
        setTimeout(cleanup, 300);
    };

    return (
        <div
            className={style.alert}
            style={{
                ...(rightPosition ? { right: rightPosition } : {})
            }}
        >
            <div className={`alert alert-${type}`}>
                <button
                    type="button"
                    className={"close " + style.close}
                    onClick={abort}
                >
                    &times;
                </button>
                {message}
            </div>
        </div>
    );
};

export default options => {
    if (typeof options === "string") {
        options = {
            message: options
        };
    }

    let wrapper = document.getElementById("proxy-notification-wrapper");
    if (!wrapper) {
        wrapper = document.body.appendChild(document.createElement("div"));
        wrapper.id = "proxy-notification-wrapper";
        wrapper.className = style.wrapper;
    }

    const target = wrapper.appendChild(document.createElement("div"));
    const cleanup = () => {
        ReactDOM.unmountComponentAtNode(target);
        setTimeout(target.remove);
    };

    ReactDOM.render(<Alert {...options} cleanup={cleanup} />, target);
};
