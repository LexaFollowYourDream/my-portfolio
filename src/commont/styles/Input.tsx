import React, {ChangeEvent,} from 'react';
import s from "./imput.module.css"

type MaxInputPropsType = {
    inputMaxCallback: (maxValue: string) => void,
    value?: string,
}

const Input: React.FC<MaxInputPropsType> = (
    {
        inputMaxCallback,
        value,

    }
) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
        inputMaxCallback(event.currentTarget.value)
    }

    return (

            <input
                type="text"
                value={value}
                onChange={onChangeHandler}
                className={s.input}
            />

    );
};

export default Input;