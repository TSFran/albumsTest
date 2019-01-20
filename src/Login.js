import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import firebase from './initializers/firebase';

import { connect } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';

import { fetchToken } from './Actions/token';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userLoggedIn: false,
			photoURL: ''

		}
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				// Hay inicio sesion
				this.setState({
					userLoggedIn: true,
					photoURL: user.providerData[0].photoURL
				});
			} else {
			 // No hay inicio de sesión
			 this.setState({
				userLoggedIn: false,
				photoURL: ''
			});
			}
		});
	}

	logout = () => {
		firebase.auth().signOut().then(console.log);
	}

	login = () => {
		// let provider = new firebase.auth.GoogleAuthProvider();
		// provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');
		// firebase.auth().signInWithPopup(provider).then(result=>{
		// 	let token = result.credential.accessToken;
		// 	this.props.saveToken(token);
		// 	console.log(result);
		// }).catch(err => {
		// 	console.log(err);
		// })
		this.props.getToken();
	}

	logInButton = () => {
		if(this.state.userLoggedIn) {
			return (
				<React.Fragment>
					<Avatar src={this.state.photoURL} />
					<IconButton color="inherit" onClick={this.logout}>
						<ExitToApp />
					</IconButton>
				</React.Fragment>
			);
		}

		return (
			<Button 
				variant="contained" 
				onClick={this.login} 
			>
				Iniciar Sesion con Google
			</Button>
		);
	}

	render() {
		const { token } = this.props;
		return (
			<div>
				<p>{token}</p>
				{this.logInButton()}
			</div>
		);
	}
}

// const mapStateToProps = (state)=> {
// 	return {
// 		token: state.token
// 	}
// }

// const saveToken = (token) => {
// 	return {
// 		type: 'SET_TOKEN',
// 		token: token
// 	}
// }

// const mapDispatchToProps = {
// 	saveToken,
// }

const mapStateToProps = ({ Token }) => ({
	token: Token.data
});

const mapDispatchToProps = (dispatch) => ({
	getToken: () => dispatch(fetchToken())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

// export default withStyles({
// 	container: {
// 		display: 'flex',
// 		flexDirection: 'row'
// 	}
// })(Login)