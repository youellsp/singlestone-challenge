import React from 'react';
import '../styles/customButton.css';

const CustomButton = ({ className, label, onClick }) => (
    <button className={className} onClick={onClick}>{label}</button>
);

export default CustomButton;