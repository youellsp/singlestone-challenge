import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/steps.css'
import Step from './Step';
import { loadSteps } from '../store/actions';

const Steps = ({ title }) => {
    const dispatch = useDispatch();
    const howItWorks = useSelector(state => state.howItWorks);
    const { loading, steps } = howItWorks;

    useEffect(() => {
        dispatch(loadSteps());
    }, [dispatch]);

    return (
        <main>
            <h1 className='title'>
                {title}
            </h1>
            <div className='step-container'>
                {!loading && steps?.length && steps.map((step, index) => <Step index={index} key={step.id} {...step} />)}
            </div>
        </main>
    );
}

export default Steps;