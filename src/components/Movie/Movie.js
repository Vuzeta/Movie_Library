import React, { Component } from 'react';
import axios from 'axios';

import './Movie.scss';

import StarRatings from 'react-star-ratings';

const _APIKEY = '0c86cfa0a9f5e305d26a1995c47aa609';
const _LANGUAGE = 'en-US';

class Movie extends Component {
	state = {
		error: false,
		id: this.props.match.params.id,
		title: '',
		gendre: '',
		adult: false,
		overview: '',
		release_date: '',
		ratio: 0,
		runtime: 0,
		directed: [],
		cast: [],
		background_poster: '',
	};

	componentDidMount() {
		const requestHost = `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${_APIKEY}&append_to_response=credits&language=${_LANGUAGE}`;
		axios
			.get(requestHost)
			.then(res => {
				console.log(res.data);
				const {
					original_title,
					overview,
					genres,
					vote_average,
					runtime,
					release_date,
					credits,
					adult,
					backdrop_path,
				} = res.data;
				this.setState({
					title: original_title,
					overview,
					gendre: genres[0].name,
					ratio: vote_average / 2,
					runtime,
					release_date,
					cast: credits.cast.splice(0, 8),
					directed: credits.crew.splice(0, 3),
					adult,
					background_poster: `https://image.tmdb.org/t/p/original${backdrop_path}`,
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
		const {
			title,
			gendre,
			overview,
			ratio,
			runtime,
			release_date,
			cast,
			directed,
			adult,
			background_poster,
		} = this.state;

		const actors = cast.map((actor, i) => {
			const name = actor.name,
				image = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`,
				character = actor.character;
			return (
				<div className="cast__actor" key={i}>
					<img src={image} alt="actor poster" className="cast__img" />
					<p className="cast__name">{character}</p>
					<p className="cast__name">{name}</p>
				</div>
			);
		});

		const crew = directed.map((person, i) => (
			<p key={i} className="directed__person">
				{person.name}
			</p>
		));

		return (
			<div className="movie">
				<div className="movie__bg" style={{ background: `url(${background_poster})` }}></div>
				<div className="movie__box">
					<h1 className="movie__title">{title}</h1>
					<div className="movie__ranking">
						<div className="starbox">
							<StarRatings
								rating={ratio}
								starRatedColor="hsl(193, 73%, 58%)"
								starEmptyColor="hsl(223, 14%, 60%)"
								changeRating={this.changeRating}
								numberOfStars={5}
								starDimension="25px"
								starSpacing="2px"
								name="rating"
							/>
							<span className="starbox__ratio">{ratio.toFixed(1)} / 5</span>
						</div>
						<div className="info">
							<span className="info__gendre">{gendre} /</span>
							<span className="info__time"> {runtime} min /</span>
							<span className="info__releaseDate"> {release_date.split('-')[0]}</span>
							{adult ? <span className="info__releaseDate"> / 18 +</span> : null}
						</div>
					</div>
					<div className="overview">
						<p className="overview__description">{overview}</p>
					</div>
					<div className="cast">
						<h2 className="cast__title">CAST</h2>
						<div className="cast__box">{actors}</div>
					</div>
				</div>
				<div className="directed">
					<h2 className="directed__title">DIRECTED</h2>
					{crew}
				</div>
			</div>
		);
	}
}

export default Movie;
