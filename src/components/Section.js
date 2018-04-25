import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import {Parallax,Background} from 'react-parallax'
import '../css/Section.sass'

class Section extends Component {
	constructor(props){
		super(props)
		this.state = {
			section: props.section
		}
	}


	render() {
		// simple check for section data
		if(this.state.section){
			var content
			// check if content type is a react value or list of react values
			if(this.state.section.content && this.state.section.content.type == 'react' && this.state.section.content.value){
				var content
				// check if content value is a list of values
				if(this.state.section.content.value.values){
					content = []
					// loop all content values
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
				} 
				// if not, simply render the value
				else {
					content = this.state.section.content.value
				}
			}
			if(this.state.section.bgImage){
				content = <Parallax className={"section "+this.state.section.classes} strength="100" bgHeight="auto" bgImage={this.state.section.bgImage}>{content}</Parallax>
			} else {
				content = <div className={"section "+ this.state.section.classes } style={this.state.section.style}>
										{ content }
									</div>
			}
			return <div 
							className={"section-container "+this.state.section.bgImage ? 'parallax-section-container' : undefined} 
							id={this.state.section.id}
							>
					<div className="section-positioner">
						{ content }
					</div>
				</div>
		} else {
			return null
		}
	}
}

export default Section;
