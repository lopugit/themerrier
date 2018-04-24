import React, { Component } from 'react';
import Section from './Section'
import '../App.css';

class Sections extends Component {
	constructor(props){
		super(props)
		this.state = {
			sections: props.sections
		}
	}


	render() {
		let renderables = []
		for(var i=0; i<this.state.sections.length; i++){
			renderables.push(<Section section={this.state.sections[i]} key={i}/>)
		}
		if(this.state.sections){
			return renderables
		} else {
			return null
		}
	}
}

export default Sections;
