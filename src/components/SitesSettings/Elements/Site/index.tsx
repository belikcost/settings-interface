import React from 'react';

import { ISite } from '../../../../types';
import { InputTypeEnums, InputVariantEnums, SelectVariantEnums } from "../../../../enums";

import Input from "../../../../primitives/Input";
import Select from "../../../../primitives/Select";

interface ISiteProps extends ISite {
    audioCollections: string[];
}

const Site = ({ name, domain, observerClass, audioCollection, audioCollections }: ISiteProps) => {

    return (
        <div>
            <Input
                labelText="Название сайта"
                value={name}
                onChange={() => {}}
                type={InputTypeEnums.text}
                variant={InputVariantEnums.small}
            />
            <Input
                labelText="Домен без www, https"
                value={domain}
                onChange={() => {}}
                type={InputTypeEnums.text}
                variant={InputVariantEnums.small}
            />
            <Input
                labelText="Класс наблюдателя"
                value={observerClass}
                onChange={() => {}}
                type={InputTypeEnums.text}
                variant={InputVariantEnums.small}
            />
            <Select
                labelText="Выдаваемые звуки"
                variant={SelectVariantEnums.small}
                selectedOption={audioCollection}
                options={audioCollections}
                onSelect={() => {}}
            />
        </div>
    );
};

export default Site;