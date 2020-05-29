import React, {Component} from 'react';
import s from './Login.module.css';

import {connect} from 'react-redux';

class Login extends Component {
	constructor(props){
		super(props);

		this.state = {
			name: '',
			password: ''
		}
	}

	handleChangeName = (e) => {
		this.setState({name: e.target.value});
	}

	handleChangePassword = (e) => {
		this.setState({password: e.target.value});
	}

	handleBtn = (e) => {
		let {history, login} = this.props;

		e.preventDefault();
		
		login();
		history.push("/news");
	}

	render() {
		const {name, password} = this.state;
		return (
			<div className={s.container}>
				<h1> Вход </h1>
				<input type="text" className={s.input} value={name} onChange={this.handleChangeName} />
				<input type="password" className={s.input_password} value={password} onChange={this.handleChangePassword} />
				<button className={s.button} onClick={this.handleBtn}> Войти </button>
			</div>
		)
	}
}

const dispatchToProps = (dispatch) => ({
	login: () => dispatch({type: 'LOGIN'})
})

export default connect(null, dispatchToProps)(Login);