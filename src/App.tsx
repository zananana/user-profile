import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserProfile from './components/userProfile/userProfile';
import ProfileComments from './components/profileComments/profileComments';
import './App.scss';

class App extends React.Component {

  private profileWrapper: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props) {
    super(props)
    this.handleWrapperHeight = this.handleWrapperHeight.bind(this);
  }

  handleWrapperHeight(showComments) {
    if(!showComments && this.profileWrapper.current && !this.profileWrapper.current.classList.contains("wrapped") ){
      this.profileWrapper.current.className += ' wrapped';
    } else if (showComments && this.profileWrapper.current) {
      this.profileWrapper.current.classList.remove('wrapped');
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className='container'>
          <div className='profile-wrapper' ref={this.profileWrapper}>
            <div className='blue-background' />
            <UserProfile />
            <ProfileComments handleWrapperHeight = {this.handleWrapperHeight}/>
          </div>
            
        </div>
      </Provider>
    );
  }
}

export default App;
