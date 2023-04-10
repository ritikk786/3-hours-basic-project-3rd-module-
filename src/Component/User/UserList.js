import Card from '../UI/Card'
import classes from './UserList.module.css'

const UserList=(props)=>{
    return(
        <Card className={classes.users}>
        <ul>
         {!props.users.length&&<h4>add user here</h4>}   
        {props.users.map((user) => (
            <li key={user.id}>
                {user.name} ({user.age} years old) {user.collage}
            </li>
        ))}
        </ul>
        </Card>
    )
}
export default UserList