import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/Actions/actions';

const useStyles = makeStyles({
        button: {
        marginTop: 50
    }
});

const Adduser = () => {
    const classes = useStyles();
    const [userInfo, setUserInfo] = useState({
        name: '',
        username: '',
        email: '',
        city: '',
        phone: '',
        website: ''
    })
    const [error, setError] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();

    const {name, username, email, city, phone, website } = userInfo;

    const handleChange = (event) => {
        setUserInfo ({...userInfo, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        //event.prventDefault();
        console.log("form submitted");

        if(!name || !username || !email || !city || !phone || !website){
            setError ("Please Fill all Values");
        }
        else{
            dispatch(addUser(userInfo));
            history.push("/");
            setError("");
        }
    }

    return (
        <div>
            <div className={classes.button}>
                <Button color="error" variant="contained" onClick={()=> history.push("/")}>
                    Go Back
                </Button>
            </div>
            <h2>Add User</h2>
            {error && <h3 style={{color: 'red'}}>{error}</h3>}
            
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
                >
                    <TextField id="standard-basic" label="Name" name="name" variant="standard" type="text" value={name} onChange={handleChange} />
                    <br/>
                    <TextField id="standard-basic" label="Username" name="username" variant="standard" type="text" value={username} onChange={handleChange} />
                    <br/>
                    <TextField id="standard-basic" label="Email" name="email" variant="standard" type="email" value={email} onChange={handleChange} />
                    <br/>
                    <TextField id="standard-basic" label="City" name="city" variant="standard" type="text" value={city} onChange={handleChange} />
                    <br/>
                    <TextField id="standard-basic" label="Phone" name="phone" variant="standard" type="number" value={phone} onChange={handleChange} />
                    <br/>
                    <TextField id="standard-basic" label="Website" name="website" variant="standard" type="text" value={website} onChange={handleChange} />
                    <br/>
                    <br/>
                    <Button color="primary" variant="contained" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>
            
        </div>
    )
}

export default Adduser
