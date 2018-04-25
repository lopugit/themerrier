import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import '../css/Section.sass'

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
			var content
			if(this.state.section.content && this.state.section.content.type == 'react' && this.state.section.content.value){
				var content
				if(this.state.section.content.value.values){
					content = []
					for(var i=0; i < this.state.section.content.value.values.length; i++){
						var noReact = this.state.section.content.noReactOn && this.state.section.content.noReactOn.indexOf && this.state.section.content.noReactOn.indexOf(i) >= 0
						console.log(this.state.section.content)
						if(!this.state.section.content.noAnimateOnScroll && !noReact){
							var subcontent =	<Fade 
																	left
																	// left={this.state.section.content.fadeInDirection == 'left' ? true : this.state.section.content.fadeInDirection == 'right' ? false : true } 
																	// right={this.state.section.content.fadeInDirection == 'right' ? true : false} 
																	key={i} 
																	className="texts" 
																>
								<div >{ this.state.section.content.value.values[i] }</div>
							</Fade>
						} else {
							var subcontent = <div className="texts" key={i}>{ this.state.section.content.value.values[i] }</div>
						}
						content.push(subcontent)
					}
				} else {
					content = this.state.section.content.value
				}
			}
			return <div className="section-container" id={this.state.section.id}>
					<div className="section-positioner">
						<div className={"section "+ this.state.section.classes } style={this.state.section.style}>
							{ content }
						</div>
					</div>
				</div>
		} else {
			return null
		}
	}
}

export default Section;
