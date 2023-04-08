import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import { useState } from 'react'
import Error from '../UI/Error'

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredUserage, setEnteredUserage] = useState('')
    const [error, setError] = useState()
    const adduser = (event) => {
        event.preventDefault()
         
        if(enteredUsername.trim().length===0 || enteredUserage.trim().length===0){
            setError({
                title:'Invalid input',
                message:'Please fill the required details'
            })
            return;
        }
        if(+enteredUserage < 1){
            setError({
                title:'Invalid Age',
                message:'Please enter valid age(>0)'
            })
            return;
        }
        props.onAdduser(enteredUsername,enteredUserage)
        setEnteredUsername('')
        setEnteredUserage('')
    }
    const setusername =(event)=>{
        setEnteredUsername(event.target.value)
    }
    const setuserage =(event)=>{
        setEnteredUserage(event.target.value)
    }
    const errorhandler=()=>{
        setError(null)
    }

    return (
        <div>
        {error &&<Error title={error.title} message={error.message} onConfirm={errorhandler}/>}
        <Card className={classes.input}>
            <form onSubmit={adduser}>
                <label htmlFor="username">Username</label>
                <input id="name" type="text" value={enteredUsername} onChange={setusername} />
                <label htmlFor="userage"> Age(Years)</label>
                <input id="age" type="number" value={enteredUserage} onChange={setuserage} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    )
}
export default AddUser