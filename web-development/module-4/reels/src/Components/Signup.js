import * as React from 'react';
import {useState, useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
// import { makeStyles } from '@mui/styles' 
import Alert from '@mui/material/Alert';
import './Signup.css';
import instagramLogo from '../Assets/Instagram.jpg';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Link} from 'react-router-dom';                                                                          // import { Link, useHistory } from 'react-router-dom'; 
import {AuthContext} from '../Context/AuthContext';
import {database, storage} from '../firebase';

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
    // const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [file, setFile] = useState(null); 
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);                                                              // state loading is created for disabling SIGN UP btn after user cicked on it so that to avid infinite request 
    // const history = useHistory();
    const {signup} = useContext(AuthContext);
 
    const handleSignup = async () => {
        if(file == null) {
            setError("Please upload profile image");
            setTimeout(() => {
                setError('');
            }, 2000)
            return;
        }

        try {
            setError('');
            setLoading(true);
            let userObj = await signup(email, password);
            let uid = userObj.user.uid;
            // console.log(uid);
            const uploadTask = storage.ref(`/users/${uid}/ProfileImage`).put(file);
            uploadTask.on('state_changed', fn1, fn2, fn3);                                                    // listener    fn1 - Progress | fn2 - Error | fn3 - success
            function fn1(snapshot) {                                                                          // snapshot tells who much work done till now
                let progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                console.log(`upload is ${ progress } done`);
            }
            function fn2(error) { 
                setError(error);
                setTimeout(() => {
                    setError('');
                }, 2000)
                setLoading(false);
                return;
            }
            function fn3(){
                uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                    // console.log(url);
                    database.users.doc(uid).set({
                        email: email,
                        userId: uid,
                        fullName: name,
                        profileImgUrl: url,
                        createdAt: database.getTimeStamp()
                    })
                })
                setLoading(false);
                // history.push('/');
            }
        } catch(err) {
            setError(err);
            setTimeout(() => {
                setError('');
            }, 2000)
        }
    }

    return (
        <div className="signupWrapper" >
            <div className="signupCard" >
                <Card variant="outlined">
                    <div className="instagram-logo" >
                        <img src={instagramLogo} alt = "" />
                    </div>
                    <CardContent>
                        <Typography variant="subtitle1">                                                        {/* className={classes.text1}  */}
                            Sign up to see photos and videos from your friends 
                        </Typography>
                        { error!='' && <Alert severity="error">{error}</Alert> }
                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password} onChange={(e) => setPassword(e.target.value) }/>
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense" size="small" value={name} onChange={(e) => setName(e.target.value)}/>
                        <Button size="small" color="secondary" fullWidth={true} variant="outlined" margin="dense" startIcon={<CloudUploadIcon/>} component="label">              
                            Upload Profile Image 
                            <input type="file" accept="image/*" hidden onChange={(e) => setFile(e.target.files[0])}/>
                        </Button>
                    </CardContent>
                    <CardActions>
                        <Button color="primary" fullWidth={true} variant="contained" disabled={loading} onClick={handleSignup}> Sign Up </Button>
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