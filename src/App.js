import React, { Component } from 'react'
import Sections from './components/Sections'
import Headroom from 'react-headroom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import './css/App.sass';
import './css/animate.min.css'
var beachSand = require('./assets/img/beach-sand.jpg')
var themerrierlogo = require('./assets/img/themerrierlogo.png')
var themerrierlogowhite = require('./assets/img/themerrierlogowhite.png')
var greenpaddock = require('./assets/img/green-paddock.jpeg')
// var greenpaddock = require('./assets/img/passion.jpeg')
// var greenpaddock = require('./assets/img/passion2.jpeg')
// var greenpaddock = require('./assets/img/passion3.jpeg')
var wewantyou = require('./assets/img/wewantyou.jpg')

class App extends Component {
		constructor(props){
		super(props)

		this.state = {
			sections: [
				{
					style: {
						background: "#97d7db"
					},
					content: {
						type: 'react',
						value: <img className="themerrierlogo" src={themerrierlogo}></img>,
						noAnimateOnScroll: true
					},
					id: "themerrierlogo"
				},
				{
					style: {
						background: "#97d7db",
					},
					classes: 'grey',
					content: {
						type: 'react',
						value: {
							values: [
								"We're planning something.",
								"Something big.",
								"We're creating it right now.",
								"It's a merrier revolution."
							]
						},
						noAnimateOnScroll: true
					},
					id: "planningsomething"
				},
				{
					bgImage: beachSand,
					classes: 'white',
					content: {
						type: 'react',
						noReactOn: [
							0
						],
						value: {
							values: [
								<Headroom disableInlineStyles>
									<div className={"skipintro"}>skip intro</div>
								</Headroom>,
								"We believe society lost it's way some time ago.",
								"We're going to change the world for the better."
							]
						}
					},
					id: "societiesWay"
				},
				{
					style: {
						background: "#f06ba3"
					},
					classes: 'grey',
					content: {
						type: 'react',
						value: {
							values: [
								"It's time to give power back to the people.",
								"To the creators. Thinkers, leaders, and experts."
							]
						}
					},
					id: "powerback"
				},
				{
					bgImage: greenpaddock,
					classes: 'white',
					content: {
						type: 'react',
						value: {
							values: [
								"To the people with a passion.",
								"It's time to empower these people so they can have a real impact.",
								"It's time to help those with a voice create a career from that voice."
							]
						}
					},
					id: "peoplepassion"
				},
				{
					style: {
						background: "#f69264"
					},
					classes: 'grey',
					content: {
						type: 'react',
						value: {
							values: [
								"And with that impact, they will do something good for the world.",
								"We're planning a revolution."
							]
						}
					},
					id: "impact"

				},
				{
					bgImage: wewantyou,
					classes: 'white',
					content: {
						type: 'react',
						value: {
							values: [
								"We want you to join us?"
							]
						}
					},
					id: "wewantyou"
				},
				{
					style: {
						background: "#6c70dd"
					},
					classes: 'white',
					content: {
						type: 'react',
						value: {
							values: [
								"Are you a:",
								<ul>
									<li>creator</li>
									<li>brand</li>
									<li>cause</li>
									<li>customer</li>
								</ul>,
								<div className="smaller">
									For more info fill in the box below:
								</div>,
								<form className="moreinfoform">
									<input style={{color: "#6c70dd"}} type="email" placeholder="email" />
								</form>,
								<div className="themerrierbottom" >
									<img src={ themerrierlogowhite } />
									<span>The Merrier</span>
								</div>
							]
						},
						noTextParallax: true,
					},
					id: "moreinfo"
				}
			]
		}
	}
	render() {
		return 	<div className="App">
							<ParallaxProvider>
								<Sections sections={this.state.sections} />
							</ParallaxProvider>
						</div>
	}
}

export default App;
