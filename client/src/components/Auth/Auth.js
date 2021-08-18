import React, { useState } from "react"
import Input from "./Input"
import {
	Avatar,
	Button,
	Paper,
	Grid,
	Typography,
	Container
} from "@material-ui/core"
import { GoogleLogin } from "react-google-login"
import Icon from "./icon"
import useStyles from "./styles"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: ""
}

const Auth = () => {
	const classes = useStyles()
	const [isSignup, setIsSignup] = useState(true)
	const [form, setForm] = useState(initialState)
	const [showPassword, setShowPassword] = useState(false)

	const handleShowPassword = () => setShowPassword(!showPassword)

	const switchMode = () => {
		setForm(initialState)
		setIsSignup((prevIsSignup) => !prevIsSignup)
		setShowPassword(false)
	}

	const handleSubmit = () => {}

	const handleChange = () => {}

	const googleSuccess = (res) => {
		console.log(res)
	}

	const googleError = () =>
		alert("Google Sign In was unsuccessful. Try again later")

	return (
		<Container component='main' maxWidth='xs'>
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant='h6'>{isSignup ? "Sign Up" : "Sign In"}</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignup && (
							<>
								<Input
									name='firstName'
									label='First Name'
									handleChange={handleChange}
									autoFocus
									half
								/>
								<Input
									name='lastName'
									label='Last Name'
									handleChange={handleChange}
									half
								/>
							</>
						)}
						<Input
							name='email'
							label='Email Address'
							handleChange={handleChange}
							type='email'
						/>
						<Input
							name='password'
							label='Password'
							handleChange={handleChange}
							type={showPassword ? "text" : "password"}
							handleShowPassword={handleShowPassword}
						/>
						{isSignup && (
							<Input
								name='confirmPassword'
								label='Repeat Password'
								handleChange={handleChange}
								type='password'
							/>
						)}
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}>
						{isSignup ? "Sign Up" : "Sign In"}
					</Button>
					<GoogleLogin
						clientId='247661976374-k2v13j26d7hjncp2oj77fva2nri3u33b.apps.googleusercontent.com'
						render={(renderProps) => (
							<Button
								className={classes.googleButton}
								color='primary'
								fullWidth
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
								startIcon={<Icon />}
								variant='contained'>
								Sign In With Google
							</Button>
						)}
						onSuccess={googleSuccess}
						onFailure={googleError}
						cookiePolicy='single_host_origin'
					/>
					<Grid container justify='flex-end'>
						<Grid item>
							<Button onClick={switchMode}>
								{isSignup
									? "Already have an account? Sign in"
									: "Don't have an account? Sign Up"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	)
}

export default Auth
