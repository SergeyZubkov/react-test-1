import React, {Component} from 'react';
import s from './News.module.css';

import {connect} from 'react-redux';

class News extends Component {

	render() {
		return (
			<div className={s.container}>
				<h1>Новости</h1>
				{this.props.news.map(
					item => <div className={s.item} key={item}> {item} </div>
				)}
			</div>
		)
	}
}

const stateToProps = ({news}) => ({news});


export default connect(stateToProps)(News);