import React, { Component } from 'react';
import Sections from './components/Sections'
import logo from './logo.svg';
import './App.css';

console.log('window: ', window)
// const pug = window.pug

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			sections: [
				{
					background: {
						type: "colour",
						value: "#97d7db",
					},
					content: {
						type: 'image',
						value: 'static/themerrier.png',
						align: 'left'
					},
					id: "test"
				},
				{
					background: {
						type: "colour",
						value: "#97d7db"
					}
				},
				{
					background: {
						type: "image",
						value: "url"
					}
				},
				{
					background: {
						type: "colour",
						value: "#f06ba3"
					}
				},
				{
					background: {
						type: "image",
						value: "url"
					}
				},
				{
					background: {
						type: "colour",
						value: "#f06ba3"
					}
				},
				{
					background: {
						type: "image",
						value: "url"
					}
				},
				{
					background: {
						type: "colour",
						value: "#6c70dd"
					}
				},
				{
					background: {
						type: "colour",
						value: "#6c70dd"
					}
				}
			]
		}
	}


	render() {
		// return pug`
		//   <div className="App">
		//     <header className="App-header">
		//       <img src={logo} className="App-logo" alt="logo" />
		//       <h1 className="App-title">Welcome to React</h1>
		//     </header>
		//     <p className="App-intro">
		//       To get started, edit <code>src/App.js</code> and save to reload.
		//     </p>
		//   </div>
		// `;
		return <Sections sections={this.state.sections} />
	}
}

export default App;
