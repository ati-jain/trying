import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Avatar from '@mui/material/Avatar';

function Icon(props) {
    const color = props.imp ? 'red' : 'green';
    return (
        <Avatar sx={{ bgcolor: color }} >
            <AssignmentIcon />
        </Avatar>
    );
}

export default function Todo(props) {
    const todo = props.todo;
    const id = todo.id;

    function handle() {
        props.handleToggle(id);
    }

    function dlt() {
        props.handleDelete(id);
    }

    if (todo.id === -1) {
        return (
            <ListItem sx={{ bgcolor: 'gray' }}>
                <Button >
                    <ListItemAvatar>
                        <Icon imp={todo.imp} />
                    </ListItemAvatar>
                </Button>
                <ListItemText primary={todo.task} secondary={"deleted"} />
                <IconButton aria-label="delete" size="large" >
                    <DeleteIcon fontSize='large' />
                </IconButton>
            </ListItem>
        );
    }
    return (
        <ListItem>
            <Button onClick={handle}>
                <ListItemAvatar>
                    <Icon imp={todo.imp} />
                </ListItemAvatar>
            </Button>
            <ListItemText primary={todo.task} secondary={todo.id} />
            <IconButton aria-label="delete" size="large" onClick={dlt}>
                <DeleteIcon fontSize='large' />
            </IconButton>
        </ListItem>
    );
}