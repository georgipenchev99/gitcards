// import logo from './logo.svg';
// import './App.css';
import CardList from './CardList.jsx';
import Form from './Form.jsx';
import Card from './Card.jsx';
import * as React from "react";
class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}


export default App;
