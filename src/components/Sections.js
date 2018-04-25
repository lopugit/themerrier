import React, { Component } from 'react';
import Section from './Section'
import '../css/Sections.sass';

class Sections extends Component {
	constructor(props){
		super(props)
		console.log(props)
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
