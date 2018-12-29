import * as React from 'react';
import { Component } from 'react';

export interface ICommentProps {
    key: any;
    data: any;
}
 
export interface ICommentState {
    
}
 
class Comment extends Component<ICommentProps, ICommentState> {

    dateConverter = (timestamp) => {
        let now: any = new Date();
        now = now.getTime();
        
        let diff = now - timestamp;
        diff = diff/86400000;
        let displayDays: string = (Math.floor(diff)).toString();

        if(displayDays === "0") {
            displayDays = "today";
        } else {
            displayDays += "d";
        }

        return displayDays;
    }

    render() { 
        const { authorAvatarUrl, firstName, lastName, datePosed, comment} = this.props.data;
        return ( 
            <div className="comment">
                <div className="avatar-column">
                    <div className="avatar">
                        <img src={authorAvatarUrl}/>
                    </div>
                </div>
                <div className="comment-column">
                    <div className="details-row">
                        <div className="author">{firstName} {lastName}</div>
                        <div className="date">{this.dateConverter(datePosed)}</div>
                    </div>
                    <div className="text">{comment} </div>
                </div>
            </div>
         );
    }
}
 
export default Comment;