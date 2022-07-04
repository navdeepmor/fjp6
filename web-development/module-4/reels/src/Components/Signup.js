import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import {createUseStyles} from 'react-jss'                                                           // deprecated: import { makeStyles } from '@mui/styles' 
// import {Styled} from 'styled-jss'
import Alert from '@mui/material/Alert';
import './Signup.css';
import instagramLogo from '../Assets/Instagram.jpg';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function Signup() {

    // const useStyles = createUseStyles({
    //     text1:{
    //         color:'green',
    //         textAlign:'center'
    //     }
    // })

    // const classes = useStyles()

    // const styled = Styled({
    //     root: {
    //         color: 'green',
    //         textAlign: 'center'
    //     }
    // })

    // const classes = styled();

    return (
        <div className="signupWrapper" >
            <div className="signupCard" >
                <Card variant="outlined">
                    <div className="instagram-logo" >
                        <img src={instagramLogo} alt = "" />
                    </div>
                    <CardContent>
                        <Typography className={classes.text1} variant="subtitle1">                                            {/* className={classes.text1}  */}
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
                        <Typography className={classes.text1} variant="subtitle1">
                            By signing up, you agree to our Terms, Data Policy and Cookies policy.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
        
    );
}