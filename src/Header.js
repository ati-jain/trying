import Typography from '@mui/material/Typography';
export default function Header() {
    return (
        <header>
            <Typography variant="h2" component="div" gutterBottom sx={{ color: 'blue', margin: 'auto', width: 'fit-content' }}>
                Todo List
            </Typography>
        </header>
    );
}