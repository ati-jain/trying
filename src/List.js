import List from '@mui/material/List';
import Todo from './Todo.js'

export default function ShowList(props) {
    return (
        <List sx={{ margin: 'auto', width: 'fit-content' }}>
            {props.list.map((todo) => {
                return (
                    <Todo todo={todo} handleToggle={props.handleToggle} handleDelete={props.handleDelete} />
                );
            })}
        </List>
    );
}