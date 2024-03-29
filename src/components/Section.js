import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
// import {Parallax,Background} from 'react-parallax'
import { Parallax } from 'react-scroll-parallax';
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
					var flip = this.state.section.content.flip || false
					for(var i=0; i < this.state.section.content.value.values.length; i++){
						var noReact = this.state.section.content.noReactOn && this.state.section.content.noReactOn.indexOf && this.state.section.content.noReactOn.indexOf(i) >= 0
						if(!this.state.section.content.noAnimateOnScroll && !noReact){
							if(!this.state.section.content.noTextParallax){
								// var subcontent = <Fade 
									// 									left={!flip}
									// 									right={flip}
									// 									// left={this.state.section.content.fadeInDirection == 'left' ? true : this.state.section.content.fadeInDirection == 'right' ? false : true } 
									// 									// right={this.state.section.content.fadeInDirection == 'right' ? true : false} 
									// 									key={i} 
									// 									className="texts" 
									// 									>
									// 									<Parallax
									// 										className="parallax-texts"
									// 										offsetXMax={(flip ? offsetXMin : offsetXMax - 5) +'%'}
									// 										offsetXMin={(flip ? offsetXMax + 15 : offsetXMin +10) +'%'}
									// 									>
									// 										<div >{ this.state.section.content.value.values[i] }</div>
									// 									</Parallax>
									// 								</Fade>

								var subcontent = <Parallax
																	className={"parallax-texts n"+i}
																	offsetXMax={(flip ? '8%' : '7%')}
																	offsetXMin={(flip ? '24%' : '-5%')}
																>
																	<div >{ this.state.section.content.value.values[i] }</div>
																</Parallax>
																
								// flips the direction of fade and parallax at the same time
								flip = !flip
							} else {
								var subcontent = <Fade 
																	left
																	// left={this.state.section.content.fadeInDirection == 'left' ? true : this.state.section.content.fadeInDirection == 'right' ? false : true } 
																	// right={this.state.section.content.fadeInDirection == 'right' ? true : false} 
																	key={i} 
																	>
																	<div >{ this.state.section.content.value.values[i] }</div>
																</Fade>
							}
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
			var parallax
			if(this.state.section.bgImage){
				parallax = <Parallax 
										offsetYMax={'40%'}
										offsetYMin={'-20%'}
										slowerScrollRate
									>
									<div className="section parallax-image" style={{backgroundImage: 'url('+this.state.section.bgImage+')'}}>
									</div>
									</Parallax> 
			}
			return <div 
							className={"section-container "+(this.state.section.bgImage ? 'parallax-section-container' : '')} 
							id={this.state.section.id}
							ref={this.state.section.id}
							>
					<div className="section-positioner">
						<div className={"section "+ this.state.section.classes } style={this.state.section.style}>
							{ parallax }
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
