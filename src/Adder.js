import { Button, Icon } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react";

export default function Adder(props) {
    const [show, setShow] = useState(false);
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    function click() {
        if (!show) {
            setShow(true);
        }
        else if (userInput !== '') {
            setShow(false);
            props.addTask(userInput);
            setUserInput('');
        }
        else {
            setShow(false);
        }
    }

    return (
        <div>
            <Button variant="contained" onClick={click}
                sx={{ fontSize: 30, borderRadius: '10px', margin: 'auto', width: 'fit-content', display: 'flex', alignItems: 'center' }}>
                <Icon sx={{ fontSize: 30, margin: 'auto' }}>add_circle</Icon>
                Add
            </Button>
            {show ?
                <TextField id="standard-basic" label="Lab" variant="standard" value={userInput} onChange={handleChange}
                    sx={{ margin: 'auto', width: 'fit-content', display: 'block' }} /> :
                null}

        </div>
    );
}