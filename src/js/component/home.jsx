import React from "react";
import PropTypes from "prop-types";
//include images into your bundle

//create your first component

let Toolbar = props => {
	return (
		<nav
			id="toolbar"
			className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top d-flex justify-content-between">
			<div className="container">
				<a className="navbar-brand" href="#">
					{props.title}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div id="navbarResponsive" className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

Toolbar.propTypes = {
	title: PropTypes.string
};

let Jumbotron = props => {
	return (
		<header className="jumbotron mt-4">
			<h1 className="display-3">{props.title}</h1>
			<p className="lead">{props.text}</p>
			<p className="lead">{props.text2}</p>
			<a href="#" className="btn btn-primary btn-lg">
				Call to action!
			</a>
		</header>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	text2: PropTypes.string
};

let Card = props => {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card">
				<img id="picImage" className="card-img-top" src={props.image} />
				<div className="card-body">
					<h4 className="card-title">{props.title}</h4>
					<p className="card-text">{props.text}</p>
				</div>
				<div className="card-footer">
					<a className="btn btn-primary" href="#">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string
};

var cardOne = {
	image: "https://bit.ly/2CxCZ0Q",
	title: "Generic Online MMO",
	text:
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
};
var cardTwo = {
	image: "https://bit.ly/2W6QGwz",
	title: "Your Favorite Online Show",
	text:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non rhoncus lectus. Nullam tincidunt faucibus mauris et varius. Morbi pellentesque suscipit interdum. Morbi rutrum dictum libero, vitae laoreet tellus luctus."
};

var cardThree = {
	image: "https://bit.ly/2AS1ENq",
	title: "BUY MY GAME",
	text:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tellus eget leo consectetur facilisis. Proin pellentesque, lacus sed molestie cursus, sem libero dictum magna, sit amet viverra neque nulla."
};

var cardFour = {
	image: "https://bit.ly/2CxtVc3",
	title: "Most Games Nowadays tbh",
	text:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tellus eget leo consectetur facilisis. Proin pellentesque, lacus sed molestie cursus, sem libero dictum magna, sit amet viverra neque nulla."
};

let Footer = props => {
	return (
		<div>
			<div id="footer" className="py-5 bg-dark">
				<p className="m-0 text-center text-white">{props.copyright}</p>
			</div>
		</div>
	);
};

Footer.propTypes = {
	copyright: PropTypes.string
};

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Toolbar title="HACK THE WORLD" />
				<br />
				<br />
				<div id="main" className="container">
					<Jumbotron
						title="HEY GAMERS"
						text="DID YOU THINK YOU COULD GET AWAY!?? "
						text2="SORRY BITCHES BUT WE'RE COMING FOR YOUR WALLETS WITH ALL THIS UNFINISHED PRODUCTS!!"
					/>
					<div id="gallery" className="row text-center">
						<Card
							title={cardOne.title}
							image={cardOne.image}
							text={cardOne.text}
						/>
						<Card
							title={cardTwo.title}
							image={cardTwo.image}
							text={cardTwo.text}
						/>
						<Card
							title={cardThree.title}
							image={cardThree.image}
							text={cardThree.text}
						/>
						<Card
							title={cardFour.title}
							image={cardFour.image}
							text={cardFour.text}
						/>
					</div>
				</div>
				<Footer copyright="My Copyright © 2019" />
			</div>
		);
	}
}
