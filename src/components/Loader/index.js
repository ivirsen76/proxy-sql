import React from "react";
import style from "./style.module.css";

export default ({ loading = false, children }) => {
    return (
        <>
            {loading && (
                <div className={style.loader} />
            )}
            {children}
        </>
    );
};
