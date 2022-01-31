import { useState } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import axiosInstance from '../Services/AxiosConfig';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoginDiv = styled(motion.div)`
	display: flex;
	overflow: hidden;
	position: absolute;
	justify-content: center;
	text-align: center;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Fino Sans', sans-serif;
		font-weight: 800;
	}
	border: 2px solid ${(props) => props.theme.body};
	z-index: 1;
`;

const LoginBox = styled.div`
	margin: 10%;
	justify-content: center;
	body {
		line-height: 1.5;
	}
	h1 {
		text-transform: uppercase;
		letter-spacing: 4px;
		text-align: center;
	}
	h2 {
		font-size: 24px;
	}
	.container {
		max-width: 320px;
		margin: 0 auto;
		padding: 20px 16px 40px 16px;
		transform: translateZ(0);
		text-align: center;
	}
	.form-footer {
		margin-top: 2em;
	}
	.ui-input {
		position: relative;
		padding: 0;
		border: 0;
	}
	.ui-input input {
		border: 0;
		background: none;
		padding: 16px 0 16px 0;
		font-size: 24px;
		outline: 0;
		width: 100%;
		tap-highlight-color: rgba(0, 0, 0, 0);
		touch-callout: none;
	}
	.ui-input input + label {
		position: relative;
		display: block;
		padding: 8px 0 8px 0;
		text-transform: uppercase;
		font-size: 14px;
		letter-spacing: 0.0875em;
		font-weight: 500;
		text-align: left;
	}
	.ui-input input + label::before,
	.ui-input input + label::after {
		position: absolute;
		top: 0;
		left: 0;
		content: '';
		width: 100%;
		height: 1px;
	}
	.ui-input input + label::before {
		background-color: black;
	}
	.ui-input input + label::after {
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
		background-color: #6eb1ff;
		height: 2px;
	}
	.ui-input input + label span {
		position: relative;
		color: black;
		transition: color 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.ui-input input + label span::after {
		content: attr(data-text);
		position: absolute;
		overflow: hidden;
		left: 0;
		transform: scaleX(1);
		white-space: nowrap;
		color: #fff;
		background-image: linear-gradient(
			to right,
			#4a90e2 50%,
			rgba(255, 255, 255, 0) 0%
		);
		background-position: 100% 50%;
		background-size: 200%;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		backface-visibility: hidden;
		perspective: 1000;
		transform: translateZ(0);
		transition: background-position 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.ui-input input:focus + label::after,
	.ui-input input.error + label::after,
	.ui-input input:invalid + label::after,
	.ui-input input.filled + label::after {
		transform: scaleX(1);
		transform-origin: left;
	}
	.ui-input input:focus + label span::after,
	.ui-input input.error + label span::after,
	.ui-input input:invalid + label span::after,
	.ui-input input.filled + label span::after {
		background-image: linear-gradient(
			to right,
			rgba(255, 255, 255, 1) 50%,
			rgba(255, 255, 255, 0) 0%
		);
		background-position: 0% 50%;
	}
	.ui-input input.filled {
		color: #ffff;
	}
	.ui-input input.filled + label::after {
		background-color: #fff;
	}
	.ui-input input.filled + label span::after {
		background-image: linear-gradient(
			to right,
			#fff 50%,
			rgba(255, 255, 255, 0) 0%
		);
		background-position: 0% 50%;
	}
	.ui-input input:focus {
		color: #6eb1ff;
	}
	.ui-input input:focus + label::after {
		background-color: #6eb1ff;
	}
	.ui-input input:focus + label span::after {
		background-image: linear-gradient(
			to right,
			#6eb1ff 50%,
			rgba(255, 255, 255, 0) 0%
		);
		background-position: 0% 50%;
	}
	.ui-input input.error,
	.ui-input input:invalid {
		color: #e66161;
	}
	.ui-input input.error + label::after,
	.ui-input input:invalid + label::after {
		background-color: #e66161;
	}
	.ui-input input.error + label span::after,
	.ui-input input:invalid + label span::after {
		background-image: linear-gradient(
			to right,
			#e66161 50%,
			rgba(255, 255, 255, 0) 0%
		);
		background-position: 0% 50%;
	}
	.btn {
		border: 0;
		background-color: grey;
		padding: 18px 30px;
		font-size: 14px;
		line-height: 1.5;
		text-transform: uppercase;
		letter-spacing: 0.0875em;
		font-weight: 500;
		color: #fff;
		outline: 0;
		transition: background-color 300ms cubic-bezier(0.215, 0.61, 0.355, 1),
			color 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.btn:focus,
	.btn:active,
	.btn:hover {
		background-color: black;
		color: white;
	}
	.__first,
	.__second,
	.__third,
	.__fourth {
		animation-name: fadeIn;
		animation-duration: 180ms;
		animation-fill-mode: both;
		animation-iteration-count: 1;
	}
	.__first {
		animation-delay: 0;
	}
	.__second {
		animation-delay: 80ms;
	}
	.__third {
		animation-delay: 180ms;
	}
	.__fourth {
		animation-delay: 360ms;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translate3d(0, -25%, 0);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}
`;

export default function Login() {
	const navigate = useNavigate();
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`token/`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				navigate('/');
			});
	};

	return (
		<LoginDiv
			initial={{ height: 0 }}
			animate={{ height: '60vh' }}
			transition={{ type: 'spring', duration: 2, delay: 1 }}>
			<>
				<LoginBox>
					<h1>Sign In</h1>
					<form className='form'>
						<fieldset class='form-fieldset ui-input __first'>
							<input
								variant='outlined'
								margin='normal'
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								autoFocus
								onChange={handleChange}
							/>
							<label for='email'>
								<span data-text='Email Address'>Email Address</span>
							</label>
						</fieldset>
						<fieldset class='form-fieldset ui-input __Ssecond'>
							<input
								variant='outlined'
								margin='normal'
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
								onChange={handleChange}
							/>
							<label for='password'>
								<span data-text='Password'>Password</span>
							</label>
						</fieldset>
					</form>

					<div className='form-footer'>
						<button class='btn' onClick={handleSubmit}>
							Login
						</button>
					</div>
					<div id='button2'>
						<h3>New Here? Please sign me up! </h3>
						<NavLink to='/register'>
							<button class='btn'>Sign Up</button>
						</NavLink>
					</div>
				</LoginBox>
			</>
		</LoginDiv>
	);
}
