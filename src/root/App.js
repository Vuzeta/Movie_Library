import React, { Component } from 'react';
import './App.scss';

import SideNav from '../layouts/SideNav/SideNav';
import UpperNav from '../layouts/UpperNav/UpperNav';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Popularity from '../pages/Popularity/Popularity';
import TV_Shows from '../pages/TV_Shows/TV_Shows';
import Favourite from '../pages/Favourite/Favourite';
import Action from '../pages/Action/Action';
import Adventure from '../pages/Adventure/Adventure';
import Animation from '../pages/Animation/Animation';
import Comedy from '../pages/Comedy/Comedy';
import Crime from '../pages/Crime/Crime';
import Documentary from '../pages/Documentary/Documentary';
import Drama from '../pages/Drama/Drama';
import Family from '../pages/Family/Family';
import Fantasy from '../pages/Fantasy/Fantasy';
import History from '../pages/History/History';
import Horror from '../pages/Horror/Horror';
import Music from '../pages/Music/Music';
import Mystery from '../pages/Mystery/Mystery';
import Romance from '../pages/Romance/Romance';
import Science_Fiction from '../pages/Science_Fiction/Science_Fiction';
import TV_Movie from '../pages/TV_Movie/TV_Movie';
import Thriller from '../pages/Thriller/Thriller';
import War from '../pages/War/War';
import Western from '../pages/Western/Western';

class App extends Component {
	state = {};

	render() {
		return (
			<Router>
				<div className="container">
					<SideNav handleSearchID={this.handleSearchID} />
					<UpperNav />
					<div className="centerNav">
						<Route path="/" exact component={Popularity} />
						<Route path="/tv-shows" component={TV_Shows} />
						<Route path="/favourite" component={Favourite} />
						<Route path="/action" component={Action} />
						<Route path="/adventure" component={Adventure} />
						<Route path="/animation" component={Animation} />
						<Route path="/comedy" component={Comedy} />
						<Route path="/crime" component={Crime} />
						<Route path="/documentary" component={Documentary} />
						<Route path="/drama" component={Drama} />
						<Route path="/family" component={Family} />
						<Route path="/fantasy" component={Fantasy} />
						<Route path="/history" component={History} />
						<Route path="/horror" component={Horror} />
						<Route path="/music" component={Music} />
						<Route path="/mystery" component={Mystery} />
						<Route path="/romance" component={Romance} />
						<Route path="/science-fiction" component={Science_Fiction} />
						<Route path="/tv-movie" component={TV_Movie} />
						<Route path="/thriller" component={Thriller} />
						<Route path="/war" component={War} />
						<Route path="/western" component={Western} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
