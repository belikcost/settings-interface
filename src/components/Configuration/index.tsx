import React from "react";

import Select from "../../primitives/Select";
import Input from "../../primitives/Input";
import { InputTypeEnums, InputVariantEnums, SelectVariantEnums } from "../../enums";

import './index.scss';

const SETTINGS_OPTIONS = ['main.json1', 'main.json2', 'main.json3'];

const Configuration = () => {

    const onSelectConfig = (config: string) => {
        console.log(config);
    };

    const onEnter = (domain: string) => {
        console.log(domain);
    };

    return (
        <div>
            <div className="domain">
                <h4 className="configuration_title">API domain</h4>
                <p className="configuration_subtitle">Введите ссылку на домен, где находятся файлы проекта</p>
                <Input
                    type={InputTypeEnums.text}
                    value={''}
                    onChange={onEnter}
                    width="100%"
                    variant={InputVariantEnums.blue}
                />
            </div>
            <div className="choose-config">
                <div>
                    <h4 className="configuration_title">Наименование настроек</h4>
                    <p className="configuration_subtitle">Выберите или создайте настройки</p>
                </div>
                <Select
                    variant={SelectVariantEnums.normal}
                    selectedOption={SETTINGS_OPTIONS[0]}
                    options={SETTINGS_OPTIONS}
                    onSelect={onSelectConfig}
                    width={570}
                />
            </div>
            <div className="stopping-time">
                <div>
                    <h4 className="configuration_title">Время приостановки</h4>
                    <p className="configuration_subtitle">Выберите время для режима затишье</p>
                </div>
                <div className="stopping-time_column">
                    <div className="stopping-time_row">
                        <Input
                            type={InputTypeEnums.time}
                            value={''}
                            onChange={onEnter}
                            width={245}
                        />
                        <div className="stopping-time_separation"/>
                        <Input
                            type={InputTypeEnums.time}
                            value={''}
                            onChange={onEnter}
                            width={245}
                        />
                    </div>
                    <div className="stopping-time_row">
                        <Input
                            type={InputTypeEnums.time}
                            value={''}
                            onChange={onEnter}
                            width={245}
                        />
                        <div className="stopping-time_separation"/>
                        <Input
                            type={InputTypeEnums.time}
                            value={''}
                            onChange={onEnter}
                            width={245}
                        />
                    </div>
                    <div className="stopping-time_row">
                        <Input
                            type={InputTypeEnums.time}
                            value={''}
                            onChange={onEnter}
                            width={245}
                        />
                        <div className="stopping-time_separation"/>
                        <Input
                            type={InputTypeEnums.time}
                            value={''}
                            onChange={onEnter}
                            width={245}
                        />
                    </div>
                </div>
            </div>
            <button className="configuration__save">Сохранить</button>
        </div>
    );
};

export default Configuration;