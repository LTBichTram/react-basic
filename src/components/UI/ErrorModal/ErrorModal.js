import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import classes from './ErrorModal.module.css';

const ErrorModal = props => {
    return(
        <Card>
            <div className={classes.backdrop} onClick={props.onCancel}></div>
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onCancel}>Okee</Button>
                </footer>
            </div>
        </Card>
    )
}
export default ErrorModal;