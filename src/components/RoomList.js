import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newRoomName: ''
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat(room) });
    });
  }

  handleChange(e) {
    this.setState({ newRoomName: e.target.value });
  }
  createRoom(e) {
    e.preventDefault();
    this.roomsRef.push( {
      name: this.state.newRoomName
    });
    document.getElementById('create-room').reset();
  }

  render() {
    return (
      <div>
      <p>hi</p>
        <h1>Bloc Chat</h1>
        <div>{this.state.rooms.map(data => <p key={data.key} onClick={this.props.activeRoom} value={data.name}>{data.name}</p>)}</div>
        <form id="create-room" onSubmit={(e) => this.createRoom(e)}>
          <label>Create a Room
            <input value={this.state.newRoom} onChange={(e) => this.handleChange(e)}/>
          </label>
          <input type="submit" />
        </form>

      </div>
    );
  }
}

export default RoomList;
