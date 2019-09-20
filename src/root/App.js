import React, { Component } from 'react';
import './App.scss';

import axios from 'axios';

import SideNav from '../layouts/SideNav/SideNav';
import UpperNav from '../layouts/UpperNav/UpperNav';
import CenterNav from '../layouts/CenterNav/CenterNav';

const APIKEY = '0c86cfa0a9f5e305d26a1995c47aa609';

class App extends Component {
	state = {
		movies: [],
		title: '',
	};

	handleSearchID = e => {
		const id = e.target.dataset.id;
		const title = e.target.textContent;
		this.changePageTitle(title);
		this.handleMovie(id);
	};

	changePageTitle = title => {
		this.setState({ title });
	};

	handleMovie = id => {
		let requestHost = '';
		switch (id) {
			case '1':
				requestHost = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=pl-PL&sort_by=popularity.desc&page=1`;
				break;
			case '2':
				requestHost = `https://api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&sort_by=popularity.desc&page=1&language=pl-PL`;
				break;
			default:
				requestHost = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=pl-PL&sort_by=popularity.desc&page=1&with_genres=${id}`;
		}

		axios.get(requestHost).then(res => {
			this.setState({
				movies: res.data.results,
			});
		});
	};

	render() {
		const { title, movies } = this.state;
		return (
			<div className="container">
				<SideNav handleSearchID={this.handleSearchID} />
				<UpperNav />
				<CenterNav title={title} movies={movies} />
			</div>
		);
	}
}

export default App;
