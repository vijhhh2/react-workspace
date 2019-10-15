import React from 'react';
import './form-input.component.scss';
import { IInput } from '../../models/form-input.model';

const FormInput: React.FC<IInput> = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input onChange={handleChange} {...otherProps} className='form-input'/>
        {
            label
            ?(<label className={`${otherProps.value.length ? 'shrink': ''} form-input-label`}>{label}</label>)
            :null
        }
    </div>
);

export default FormInput;