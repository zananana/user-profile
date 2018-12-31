import * as React from 'react';
import { Component } from 'react';
import './stat.scss';

export interface IStatProps {
    data: number;
    label: string;
}
 
class Stat extends Component<IStatProps> {

    render() { 
        const { data, label } = this.props;
        return ( 
            <div className='stat-block'>
                <div className='data'>
                    {data}
                </div>
                <span className='desc'>
                    {label}
                </span>
            </div>
         );
    }
}
 
export default Stat;