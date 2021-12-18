import React, { useCallback, useState } from "react";

import { SelectVariantEnums } from "../../enums";

import './index.scss';

interface ISelect {
    selectedOption: string;
    options: string[];
    onSelect: (option: string) => void;
    width?: string | number;
    variant: SelectVariantEnums;
    labelText?: string;
}

const Select = ({ selectedOption, onSelect, options, width, variant, labelText }: ISelect) => {
    const [isOpening, setIsOpening] = useState(false);

    const handleOpening = useCallback(
        () => setIsOpening(prevState => !prevState), []
    );

    const onClickByOption = useCallback(
        (option: string) => () => onSelect(option), []
    );

    const baseClass = `select-${variant}`;

    return (
        <div>
            {labelText && (
                <p className={`${baseClass}__label-text`}>{labelText}</p>
            )}
            <div className={baseClass} onClick={handleOpening} style={{ width }}>
                <div className={`${baseClass}__selected-option`}>
                    {selectedOption}
                    {isOpening ? (
                        <svg className={`${baseClass}__arrow-down`} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24">
                            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                        </svg>
                    ) : (
                        <svg className={`${baseClass}__arrow-up`} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24">
                            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                        </svg>
                    )}
                </div>
                {isOpening && (
                    <div className={`${baseClass}__options-list`}>
                        {options.map(option => (
                            <div className={`${baseClass}_option`} onClick={onClickByOption(option)} key={option}>
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default React.memo(Select);