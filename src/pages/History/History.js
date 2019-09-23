import React, { Component } from 'react';

import axios from 'axios';
import MovieCard from '../../components/MovieCard/MovieCard';
import Pagination from '../../components/Pagination/Pagination';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const _APIKEY = '0c86cfa0a9f5e305d26a1995c47aa609';
const _PAGETITLE = 'History';
const _GENDRES_ID = 36;
const _LANGUAGE = 'pl-PL';

class History extends Component {
	state = {
		movies: [],
		total_pages: 0,
		current_page: 1,
		error: false,
	};

	changePage = e => {
		const page = e.selected + 1;

		const requestHost = `https://api.themoviedb.org/3/discover/movie?api_key=${_APIKEY}&language=${_LANGUAGE}&sort_by=popularity.desc&page=${page}&with_genres=${_GENDRES_ID}`;

		axios
			.get(requestHost)
			.then(res => {
				this.setState({
					movies: res.data.results,
				});
			})
			.catch(error => {
				console.log(error);
				this.setState(prevState => ({
					error: !prevState.error,
				}));
			});
	};

	componentDidMount() {
		const requestHost = `https://api.themoviedb.org/3/discover/movie?api_key=${_APIKEY}&language=${_LANGUAGE}&sort_by=popularity.desc&page=1&with_genres=${_GENDRES_ID}`;

		axios
			.get(requestHost)
			.then(res => {
				this.setState({
					movies: res.data.results,
					total_pages: res.data.total_pages,
				});
			})
			.catch(error => {
				console.log(error);
				this.setState(prevState => ({
					error: !prevState.error,
				}));
			});
	}
	render() {
		const { movies, total_pages, error } = this.state;

		const moviesList = movies.map(card => (
			<MovieCard
				key={card.id}
				id={card.id}
				title={card.title || card.name}
				imgPath={card.poster_path}
			/>
		));
		return (
			<>
				<h1 className="centerNav__title">{_PAGETITLE}</h1>
				<div className="movie"></div>
				{error ? <ErrorMessage /> : <div className="movie">{moviesList}</div>}
				{error ? null : <Pagination total_pages={total_pages} changePage={this.changePage} />}
			</>
		);
	}
}

export default History;