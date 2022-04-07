import React from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import allPaths from '../../Config/paths'
import logo from '../../assets/logo.png'
import emailLogo from '../../assets/emailLogo.png'

const SuccessPage = () => {
    const history = useHistory()
    const user: any = history?.location?.state

    console.log('user', user)

    if (user === undefined || user.firstName === undefined) {
        return <Redirect to={allPaths.SIGNUP} />
    }

    return (
        <div className='main'>
            <div className='main1'>
                <div>
                    <img src={logo} alt="logo" />
                </div>

                <div className='second'>
                    <img className='emailImg' src={emailLogo} alt="logo" />
                    <Typography sx={{ mt: 3 }} display='inline' className='emailImg' variant="h5" gutterBottom component="div">
                        Thanks, {user.firstName}! <br /> We've received your application
                    </Typography>
                </div>
                <br />
                <Typography style={{ opacity: 0.5 }} variant="subtitle1" gutterBottom component="div">
                    We'll process your application as soon as possible and send you a dexision with in 30 days to ({user.phoneNumber})
                    or {user.email} we will contact you in case more information is needed.
                    <p> while we're reweing your application please don't submit another application for the uPet's breeder program. </p>
                </Typography>
            </div>
        </div>
    )
}

export default SuccessPage