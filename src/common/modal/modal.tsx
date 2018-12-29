import * as React from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare  as fasShareSquare, faWindowClose as fasWindowClose  } from '@fortawesome/free-regular-svg-icons';
import './modal.scss';

interface IModalProps {
    data: string;
}
 
class Modal extends Component<IModalProps> {

    state = {
        isShown: false
    }

    onClick = () => {
        const isShown = !this.state.isShown;
        this.setState({isShown});
    }

    render() { 
        let className = "modal";
        if(this.state.isShown) {
            className += " show";
        }

        return (
            <React.Fragment>
                <button type="button" className="show-btn" onClick={this.onClick}>
                <FontAwesomeIcon color="#FFA640" size="1x" icon={this.state.isShown? faShareSquare : fasShareSquare } />
                </button> 
                <div className={className}>
                    <div className="modal-inside">
                        <button className="close-btn" type="button" onClick={this.onClick}>
                        <FontAwesomeIcon color="#d3d3d3" size="2x" icon={this.state.isShown? faWindowClose : fasWindowClose } />
                        </button>
                        <p>{this.props.data}</p>
                    </div>    
                </div>
            </React.Fragment>
         );
    }
}
 
export default Modal;