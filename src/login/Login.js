import React, {Component} from 'react';
import s from './Login.module.css';

import {connect} from 'react-redux';

import { withRouter } from "react-router";

class Login extends Component {
	constructor(props){
		super(props);

		this.state = {
			name: '',
			password: ''
		}
	}

	handleChange = (e) => {
		const {value, name} = e.target;
		console.log(name)
		this.setState({[name]: value});
	}


	handleBtn = (e) => {
		let {history, login, location} = this.props;
		let {from} = location.state || { from: {pathname: '/'}};

		e.preventDefault();
		
		if (this.state.name === 'Admin'
			&&this.state.password === "12345") {

			if (this.state.error) this.setState({error: false})

			login();
			history.push(from);
		} else {
			this.setState({error: true})
		}
	}

	render() {
		const {name, password, error} = this.state;
		return (
			<div className={s.container}>
				<h1> Вход </h1>
				{error&&<p 
							className={s.error}
						>
							Имя пользователя или пароль введены не верно 
						</p>
				}
				<input 
					type="text" 
					name="name"
					className={s.input_name} 
					value={name} 
					onChange={this.handleChange} 
					placeholder="логин"
				/>
				<input 
					type="password" 
					name="password"
					className={s.input_password} 
					value={password} 
					onChange={this.handleChange} 
					placeholder="пароль"
				/>
				<button className={s.button} onClick={this.handleBtn}> Войти </button>
			</div>
		)
	}
}

const LoginWithRouter = withRouter(Login);

const dispatchToProps = (dispatch) => ({
	login: () => dispatch({type: 'LOGIN'})
})

export default connect(null, dispatchToProps)(LoginWithRouter);