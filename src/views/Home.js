import React, {useState} from 'react';

import InputSlider from '../components/InputSlider';
import {CurrencyFormat} from '../utils';

const propsTotalAmountSlider = {
    title: 'Monto total', 
    minValue: 5000, 
    maxValue: 50000,
    isCurrency: true,
    prefix: '$ '
}

const propsTermSlider = {
    title: 'Plazo', 
    minValue: 3, 
    maxValue: 24
}

const Home = () => {

    const [totalAmount, setTotalAmount] = useState(propsTotalAmountSlider.minValue);
    const [term, setTerm] = useState(propsTermSlider.minValue);

    const getFeesPricePerMonth = () => totalAmount / term;

    return (
        <div className="main-container">
            <div className="box-container medium blue">
                <h2>Simulá tu crédito</h2>
                <InputSlider {...propsTotalAmountSlider} onChangeValue={(val) => setTotalAmount(val)}></InputSlider>
                <InputSlider {...propsTermSlider} onChangeValue={(val) => setTerm(val)}></InputSlider>
                <div className="info-box darker-blue">
                    <span>Cuota fija por mes</span>
                    <strong>{CurrencyFormat(getFeesPricePerMonth())}</strong>
                </div>
                <div className="box-footer">
                    <button className="btn btn-aqua-green block">Obtené crédito</button>
                    <button className="btn btn-light-blue block small">Ver detalle de cuotas</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
