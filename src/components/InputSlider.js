import React, {useState, useEffect} from 'react';

import CurrencyInput from 'react-currency-input-field';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {CurrencyFormat} from '../utils';

const InputSlider = ({title, defaultValue, minValue, maxValue, prefix, isCurrency, onChangeValue}) => {

    const [actualValue, setActualValue] = useState(minValue);
    const [finalValue, setFinalValue] = useState(minValue);

    useEffect(() => {
        let newVal = actualValue || 0;
        if (newVal > maxValue) newVal = maxValue
        else if (newVal < minValue) newVal = minValue
        onChangeValue(newVal)
        setFinalValue(newVal)
    }, [actualValue])

    const handleChangeActualValue = (newVal) => {
        setActualValue(newVal)
    }

    const handleBlurActualValue = () => {
        setActualValue(finalValue)
    }

    const sliderProps = {
        defaultValue,
        min: minValue,
        max: maxValue,
        className: 'material-slider',
        onChange: handleChangeActualValue
    }

    const inputProps = {
        defaultValue: actualValue,
        decimalsLimit: 0,
        value: actualValue,
        prefix,
        intlConfig: isCurrency && { locale: 'en-US', currency: 'USD' },
        maxLength: maxValue.toString().length,
        onBlur: handleBlurActualValue,
        onValueChange: handleChangeActualValue,
        step: 1,
    }

    return (
        <div className="input-slider">
            <div className="input-slider-header">
                <span className="slider-title">{title}</span>
                <CurrencyInput {...inputProps}/>
            </div>
            <div className="input-slider-footer">
                <Slider {...sliderProps} value={actualValue}/>
            </div>
            <div className="min-and-max">
                <small>{(isCurrency ? CurrencyFormat(minValue, 0) : prefix + minValue)}</small>
                <small>{(isCurrency ? CurrencyFormat(maxValue, 0) : prefix + maxValue)}</small>
            </div>
        </div>
    )
}

InputSlider.defaultProps = {
    title: '', 
    defaultValue: 0, 
    minValue: 0, 
    maxValue: 10,
    prefix: '',
    isCurrency: false,
    onChangeValue: () => {},
}

export default InputSlider;