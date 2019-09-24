import React, { Component } from 'react';
import axios from 'axios';

import star_fill from '../../assets/star_fill.svg';
import star_no_fill from '../../assets/star_no_fill.svg';
import star_half_fill from '../../assets/star_half_fill.svg';

import exampleActor from '../../assets/example_actorIMG.jpg';

const _APIKEY = '0c86cfa0a9f5e305d26a1995c47aa609';
const _PAGETITLE = 'Action';
const _GENDRES_ID = 28;
const _LANGUAGE = 'pl-PL';

class Movie extends Component {
	state = {
		error: false,
		id: this.props.match.params.id,
	};

	componentDidMount() {
		const requestHost = `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${_APIKEY}&language=${_LANGUAGE}`;
		axios
			.get(requestHost)
			.then(res => {
				console.log(res);
			})
			.catch(error => {
				console.log(error);
				this.setState(prevState => ({
					error: !prevState.error,
				}));
			});
	}

	render() {
		console.log(this.props.match.params.id);
		return (
			<div className="movie">
				<h1 className="movie__title">Licence to Kill</h1>
				<div className="movie__box">
					<div className="movie__ranking">
						<div className="starbox">
							<img src={star_fill} alt="" className="starbox__img" />
							<img src={star_fill} alt="" className="starbox__img" />
							<img src={star_fill} alt="" className="starbox__img" />
							<img src={star_half_fill} alt="" className="starbox__img" />
							<img src={star_no_fill} alt="" className="starbox__img" />
							<span className="starbox__ranking">3.5 / 5</span>
						</div>
						<div className="info">
							<span className="info__gendre">Thriller /</span>
							<span className="info__time">2h 4min</span>
							<span className="info__releaseDate">2015</span>
							<span className="info__releaseDate">18 +</span>
						</div>
					</div>
					<div className="overviewBox">
						<p className="overviewBox_description">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat turpis vitae
							ipsum cursus aliquet. Maecenas efficitur iaculis augue sit amet egestas. Vestibulum eu
							accumsan massa, non vulputate lacus. Nulla hendrerit libero tristique tristique
							mollis. Nullam eget ipsum sed lacus placerat hendrerit.{' '}
						</p>
					</div>
					<div className="cast">
						<h2 className="cast__title">CAST</h2>
						<div className="cast__box">
							<img src={exampleActor} alt="" className="cast__actorImg" />
							<p className="cast__actorName">Sylwester Stalone</p>
						</div>
					</div>
				</div>
				<div className="direct">
					<h2 className="direct__title">DIRECTED</h2>
					<p className="direct__person">Lorem Ipsum</p>
				</div>
			</div>
		);
	}
}

export default Movie;
