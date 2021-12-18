import React, { ChangeEvent, useCallback } from "react";

import { InputTypeEnums, InputVariantEnums } from "../../enums";

import './index.scss';

interface IInput {
    type: InputTypeEnums;
    value: string;
    onChange: (changedValue: string) => void;
    width?: string | number;
    variant?: InputVariantEnums;
    labelText?: string;
}

const Input = ({ type, value, onChange, width, variant, labelText }: IInput) => {

    const callWithEventTargetValue = useCallback(
        (callback) => (e: ChangeEvent<HTMLInputElement>) => callback(e.target.value), []
    );

    return (
        <label className="input__label">
            {labelText && (
                <p className="input__label-text">{labelText}</p>
            )}
            <input
                className={`input_${variant || 'default'}`}
                value={value}
                onChange={callWithEventTargetValue(onChange)}
                style={{ width }}
                type={type}
            />
        </label>
    );
};

export default React.memo(Input);