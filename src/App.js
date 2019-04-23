import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			menu: ''
		};
	}

	handler = () => {
		if (this.state.menu === 'open') {
			this.setState({ menu: 'closed' });
		} else {
			this.setState({ menu: 'open' });
		}
	};
	render() {
		return (
			<div>
				<section className="topMenu">
					<nav>
						<header>
							<h2>Start Bootstrap</h2>
						</header>
						<img
							onClick={this.handler}
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpaPj4/4+PhfX1/29vYdHR3b29uwsLCGhobAwMCBgYGhoaGrq6s3NzcPDw90dHQ4ODjJyckWFhbq6upGRkbg4OBYWFhkZGS8vLx4eHg9PT0aGhpxkIaEAAACdUlEQVR4nO3dCU7DMBCFYdO9hVJaGsre+98SQlWxCI2d2tLo2f93gnkiJLUzGYcAAAAAAAAAAAAAAAAAAA1YT+djHfPpeli8w9uVnrdDesCpd7EXmibmm717V3qx/Swp4IN3nRkeUiJuvavMso0HvPGuMdNNLOCTd4XZniIJX7wLzPZiB1x411fAwkx47V1eAddmwnvv8gq4NxNqPypO7AeGd3VFNJ5Q+Rfb2dFM+OxdXgHPZkLVddNP9hpq5F1eASMzYdh515dtZwcMd94FZruLJAxL7wozLWMBw8q7xEyraELx6zR6jfY23lVm2KQEDKHzrvNiXVrAz3Ww4obw57LJXvv+yTjZe9c70H4yYMv7ZLYa6VglbQUDAAAAAAAAAABNi24z0bHphrx36r2Ovd8lDTZ+HZBvpNmucEx+QarbzH6bFnDuXWeGeUpA7TZhu0H4i3qnt93lHWpo1o89NnTvMmexj2a86yvADrj2Lq8A+2vSW+/yCrAfio/e5RXwaCbUbxGONQl7V1dE43/D+v8P67+X1v88rOFWYwds4Hep/toi2ktb/fqwgTV+A/s0yneb6MiIM9H90mXyfmmof8+7V/t7CwAAAAAAAAAAIKTyOVGHidrM5O2gWV8LzTfd6fPadGfuJR7FUv3cxOpnX9Y/v1SzSeFbdAat9jXai12n+k3CkVnQ9c/zrn8me/1z9es/G8G7uiIaT6i2ZvqPfc6M5rLpN7tNWL3Lu2d3euu36kc/BK7+3LUGzs6T/7YroZld+4GRcIZlA+eQKp8l+566May6hko9Dzg0cKZzrxM7l3vI9zIAAAAAAAAAAAAAAAAAIOsD1pJUU4bp1noAAAAASUVORK5CYII="
							alt="tap"
						/>
						<ul>
							<li>Services</li>
							<li>PortFolio</li>
							<li>About</li>
							<li>Team</li>
							<li>Contact</li>
						</ul>
						<div className={'menu-' + this.state.menu}>
							<ul className="smallMenu">
								<li>Services</li>
								<li>PortFolio</li>
								<li>About</li>
								<li>Team</li>
								<li>Contact</li>
							</ul>
						</div>
					</nav>

					<div className="centerWords">
						<h3 className="h3">Welcome To Our Studio</h3>
						<h1 className="h1">IT'S NICE TO MEET YOU</h1>

						<button className="menuBtn">TELL ME MORE</button>
					</div>
				</section>

				<div className="services">
					<h1>SERVICES</h1>
					<p>hello thier</p>
				</div>
				<section className="threeLogos">
					<div className="e-commerce">
						<img
							className="cartLogo"
							src="https://banner2.kisspng.com/20180212/aeq/kisspng-online-shopping-shopping-cart-logo-icon-shopping-cart-smiley-face-micro-logo-5a814142e13e64.7669827715184202909226.jpg"
							alt="cart"
						/>
						<h1>E-Commerce</h1>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book.
						</p>
					</div>
					<div className="responsive-design">
						<img
							className="cartLogo"
							src="https://banner2.kisspng.com/20180212/aeq/kisspng-online-shopping-shopping-cart-logo-icon-shopping-cart-smiley-face-micro-logo-5a814142e13e64.7669827715184202909226.jpg"
							alt="cart"
						/>
						<h1>Responsive Design</h1>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book.
						</p>
					</div>
					<div className="webSecurity">
						<img
							className="cartLogo"
							src="https://banner2.kisspng.com/20180212/aeq/kisspng-online-shopping-shopping-cart-logo-icon-shopping-cart-smiley-face-micro-logo-5a814142e13e64.7669827715184202909226.jpg"
							alt="cart"
						/>
						<h1>Web Security</h1>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book.
						</p>
					</div>
				</section>

				<section className="portfolio">
					<div>
						<h1>PORTFOLIO</h1>
						<p>Lorem Ipsum is simply dummy text of the printing</p>
					</div>
					<div className="boxImage">
						<img
							src="https://images.unsplash.com/photo-1555767211-7a9938677c13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
							alt="image"
						/>
					</div>
				</section>
			</div>
		);
	}
}

export default App;
