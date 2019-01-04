import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.roomsRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const messages = snapshot.val();
      messages.key = snapshot.key;
      this.setState({ rooms: this.state.messages.concat(messages) });
    });
  }

  render() {
    return (
      <p>{this.state.messages}</p>
    );
  }
}

export default MessageList;
