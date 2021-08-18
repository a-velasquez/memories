import React from "react"
import Input from "./Input"
import {
	Avatar,
	Button,
	Paper,
	Grid,
	Typography,
	Container
} from "@material-ui/core"
import useStyles from "./styles"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"

const Auth = () => {
	const classes = useStyles()
	const isSignup = false

	const handleSubmit = () => {}

	const handleChange = () => {}

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
				</form>
			</Paper>
		</Container>
	)
}

export default Auth
