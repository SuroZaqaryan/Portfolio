import React from 'react';
import './css/ToggleStyle.css'

const Toggle = ({ checked, onChange }) => (
    <input
        className="themeMode"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="dmcheck"
    />
);

export default Toggle;
