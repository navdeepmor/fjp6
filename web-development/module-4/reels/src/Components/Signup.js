import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import { makeStyles } from '@mui/styles' 
import Alert from '@mui/material/Alert';
import './Signup.css';
import instagramLogo from '../Assets/Instagram.jpg';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Link} from 'react-router-dom';

export default function Signup() {

    // const useStyles = makeStyles({
    //     text1: {
    //       color: "gray",
    //       textAlign: "center",
    //     },
    //     card2: {
    //       height: '5vh',
    //       marginTop: '2%'
    //     }
    //   });

    return (
        <div className="signupWrapper" >
            <div className="signupCard" >
                <Card variant="outlined">
                    <div className="instagram-logo" >
                        <img src={instagramLogo} alt = "" />
                    </div>
                    <CardContent>
                        <Typography variant="subtitle1">                                            {/* className={classes.text1}  */}
                            Sign up to see photos and videos from your friends 
                        </Typography>
                        { true && <Alert severity="error"> This is an error alert - check it out! </Alert> }
                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small"/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small"/>
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense" size="small"/>
                        <Button size="small" color="secondary" fullWidth={true} variant="outlined" margin="dense" startIcon={<CloudUploadIcon/>} component="label">              
                            Upload Profile Image 
                            <input type="file" accept="image/*" hidden/>
                        </Button>
                    </CardContent>
                    <CardActions>
                        <Button color="primary" fullWidth={true} variant="contained"> Sign Up </Button>
                    </CardActions>
                    <CardContent>
                        <Typography variant="subtitle1">
                            By signing up, you agree to our Terms, Data Policy and Cookies policy.
                        </Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="subtitle1">                                                        {/* className={classes.text1} */}
                            Having an account? <Link to="/login" style={{textDecoration:'none'}}> Login </Link> 
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}