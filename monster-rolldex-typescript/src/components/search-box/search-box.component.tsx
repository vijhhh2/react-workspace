import React, { ChangeEvent } from 'react';
import './search-box.component.css';

interface Props {
    placeholder: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox: React.FC<Props> = ({placeholder, handleChange}) => (
    <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
);