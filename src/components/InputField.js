import React from "react";

function InputField({type, name, displayname, id, value}) {
    return (
        <label htmlFor={id}>{displayname}
            <input
                type={type}
                id={id}
                name={name}
                value={value}
            />
        </label>
    );
}

export default InputField;