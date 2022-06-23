import useInput from '../hooks/use-input'

const isNotEmpty = value => (value.trim() !== '')
const isEmail = value => (value.includes('@'))

const BasicForm = () => {
    const {
        value: enteredFirstName,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        changeValueHandler: changeFirstNameHandler,
        blurInputHandler: blurFirstNameHandler,
        resetInputHandler: resetFirstNameHandler
    } = useInput(isNotEmpty)
    const {
        value: enteredLastName,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        changeValueHandler: changeLastNameHandler,
        blurInputHandler: blurLastNameHandler,
        resetInputHandler: resetLastNameHandler
    } = useInput(isNotEmpty)
    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        changeValueHandler: changeEmailHandler,
        blurInputHandler: blurEmailHandler,
        resetInputHandler: resetEmailHandler
    } = useInput(isEmail)
    let formIsValid = false
    if(firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true
    }
    const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control'
    const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control'
    const emailClasses = emailHasError ? 'form-control invalid' : 'form-control'
    const submithandler = e => {
        e.preventDefault()
        console.log(enteredFirstName, enteredLastName, enteredEmail)
        resetFirstNameHandler()
        resetLastNameHandler()
        resetEmailHandler()
    }

    return (
      <form onSubmit={submithandler}>
        <div className='control-group'>
          <div className={firstNameClasses}>
            <label htmlFor='first-name'>First Name</label>
            <input 
                type='text' 
                id='first-name' 
                value={enteredFirstName}
                onChange={changeFirstNameHandler}
                onBlur={blurFirstNameHandler}
            />
            {firstNameHasError && <p className='error-text'>Please enter a first name!</p>}
          </div>
          <div className={lastNameClasses}>
            <label htmlFor='last-name'>Last Name</label>
            <input 
                type='text' 
                id='last-name' 
                value={enteredLastName}
                onChange={changeLastNameHandler}
                onBlur={blurLastNameHandler}
            />
            {lastNameHasError && <p className='error-text'>Please enter a last name!</p>}
          </div>
        </div>
        <div className={emailClasses}>
          <label htmlFor='email'>E-Mail Address</label>
          <input 
            type='email' 
            id='email' 
            value={enteredEmail}
            onChange={changeEmailHandler}
            onBlur={blurEmailHandler}
           />
           {emailHasError && <p className='error-text'>Please enter a valid email address!</p>}
        </div>
        <div className='form-actions'>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default BasicForm;


