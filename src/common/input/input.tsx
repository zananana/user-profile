import * as React from 'react';
import { Component } from 'react';

export interface IInputProps {
    value: string;
    onChange: any;
    onKeyUp: any;
    className: string;
    type: string;
    placeholder: string;
    autoComplete: string;
}

class Input extends Component<IInputProps> {

    render() { 
        const { value, onChange, onKeyUp, className, type, placeholder, autoComplete } = this.props;
        return ( 
            <input 
                className={className}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyUp={onKeyUp}
                autoComplete={autoComplete}
                />
         );
    } 
}
 
export default Input;