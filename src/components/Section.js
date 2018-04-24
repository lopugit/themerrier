import React, { Component } from 'react';
import '../App.css';

class Section extends Component {
	constructor(props){
		super(props)
		this.state = {
			section: props.section
		}
	}


	render() {
// 		let Pug = pug(`.section-container(id="{!{id}}")
// 	.section-positioner
// 		.section test!				
// `, {id: this.state.section.id})
// 		console.log(Pug)
		if(this.state.section){
			// return <Pug id={this.state.section.id}></Pug>
			return <div className="section-container" id={this.state.section.id}>
					<div className="section-positioner">
						<div className="section">

						</div>
					</div>
				</div>
		} else {
			return null
		}
	}
}

export default Section;
