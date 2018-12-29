import * as React from 'react';
import { Component, createRef } from 'react';
import {connect} from 'react-redux';
import IComment from 'src/interfaces/IComment';
import Comment from './comment/comment';
import './profileComments.scss';
import { getComments, addComments } from 'src/actions/commentsActions';
import Input from 'src/common/input/input';

interface IProfileCommentsProps {
    comments: IComment[];
    getComments: () => void;
    addComments: (comment:IComment) => void;
    handleWrapperHeight:any;
}

class ProfileComments extends Component<IProfileCommentsProps> {

    state = {
        showComments: true,
        comment: {
            value: ""
        },
        error: ""
    }

    private commentsEnd: React.RefObject<HTMLInputElement> = createRef();
    
    componentDidMount() {
        this.props.getComments();
    }

    componentDidUpdate(prevProps) {
        // scroll to bottom only when comments length is being changed
        if (prevProps.comments.length && (prevProps.comments.length !== this.props.comments.length)) {
            this.scrollToBottom();
        }
    }

    onClick = (e) => {
        this.props.handleWrapperHeight(!this.state.showComments);
        const showComments = !this.state.showComments;
        this.setState({showComments});
        e.stopPropagation();
    }

    onChange = (e): void => {
        const comment = { ...this.state.comment };
        comment.value = e.currentTarget.value;
        this.setState({ comment });
    }

    onEnter = (e):void => {
        // keycode 13 is the enter/return key
        if (e.which === 13 && e.currentTarget.value.trim().length) {
            const randomId: number = Math.random();
            let date: any = new Date();
            date = date.getTime();
            
            const newComment: IComment = {
                id: randomId,
                firstName: "Agnieszka",
                lastName: "Ziaja",
                comment: e.currentTarget.value,
                authorId: 4,
                datePosed: date,
                authorAvatarUrl: "http://localhost:3000/avatar.png"
            }

            this.props.addComments(newComment);
            const comment = { ...this.state.comment };
            comment.value = ""
            let error = this.state.error;
            error = ""
            this.setState({ comment, error });
        } else if (e.which === 13 && !e.currentTarget.value.trim().length) {
            let error = this.state.error;
            error = "The comment cannot be an empty string."
            this.setState({ error });
        }
    }



    renderInput(value, placeholder, autoComplete = "off", type = "text") {
        return (
            <Input 
                className="add-comment-input"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={this.onChange}
                onKeyUp={this.onEnter}
                autoComplete={autoComplete}
            />
        );
    }

    scrollToBottom = () => {
        if(this.commentsEnd.current){
            this.commentsEnd.current.scrollIntoView({ behavior: "smooth" });
        }
      }

    render() { 
        let commentsClassNames = "comments"
        commentsClassNames = this.state.showComments ? commentsClassNames += " show" : commentsClassNames;

         return ( 
            <div className="wrapper" id="profileComments">   
                <button 
                    type="button" 
                    className="hide-comments-btn" 
                    onClick={this.onClick}>
                    Hide comments ({this.props.comments.length})
                </button>
                <div className={commentsClassNames}>
                    {this.props.comments
                    .sort((x, y) => {
                        return x.datePosed - y.datePosed;
                    })
                    .map( comment => (
                        <Comment 
                            key={comment.id}
                            data={comment}
                        />
                    ) )}
                    <div style={{ float:"left", clear: "both" }}
                        ref={this.commentsEnd} />
                </div>
                <div className="add-comment-row">
                    {this.renderInput(this.state.comment.value, "Add a comment...")}
                </div>
                {this.state.error && <div className="add-comment-row-error">{this.state.error}</div>}
            </div>
         );
    }
}

const mapStateToProps = (state: any) => ({
    comments: state.comments.comments
})

export default connect(mapStateToProps, { getComments, addComments })(ProfileComments);