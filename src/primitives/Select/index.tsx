import React, { useCallback, useState } from "react";

import './index.scss';

interface ISelect {
    selectedOption: string;
    options: string[];
    onSelect: (option: string) => void;
    width?: string | number;
}

const Select = ({ selectedOption, onSelect, options, width }: ISelect) => {
    const [isOpening, setIsOpening] = useState(false);

    const handleOpening = useCallback(
        () => setIsOpening(prevState => !prevState), []
    );

    const onClickByOption = useCallback(
        (option: string) => () => onSelect(option), []
    );

    return (
        <div className="select" onClick={handleOpening} style={{ width }}>
            <div className="select__selected-option">
                {selectedOption}
                {isOpening ? (
                    <svg className="select__arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24">
                        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                    </svg>
                ) : (
                    <svg className="select__arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24">
                        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                    </svg>
                )}
            </div>
            {isOpening && (
                <div className="select__options-list">
                    {options.map(option => (
                        <div className="select_option" onClick={onClickByOption(option)} key={option}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default React.memo(Select);