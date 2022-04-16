import Card from '../../UI/Card/Card';
import classes from './UsersList.module.css';

const UsersList = props => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>
                        {user.userName} ({user.userAge} years old)
                    </li>
                ))}
            </ul>
        </Card>
    )
}
export default UsersList;