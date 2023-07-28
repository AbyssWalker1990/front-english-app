import { useState, useEffect } from "react"
import { useRegisterMutation } from "./authApiSlice"
import { useNavigate } from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSave } from "@fortawesome/free-solid-svg-icons"
import { ROLES } from "../../config/roles"

const USER_REGEX = /^[A-z]{3,20}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const NewUserForm = () => {

  const [addNewUser, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useRegisterMutation()

  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [validUsername, setValidUsername] = useState(false)
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [validPassword, setValidPassword] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [roles, setRoles] = useState(["User"])

  useEffect(() => {
    setValidUsername(USER_REGEX.test(username))
  }, [username])

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password))
  }, [password])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  useEffect(() => {
    if (isSuccess) {
      setUsername('')
      setPassword('')
      setRoles(['User'])
      navigate('/welcome')
    }
  }, [isSuccess, navigate])

  const onUsernameChanged = e => setUsername(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)
  const onPassword2Changed = e => setPassword2(e.target.value)
  const onEmailChanged = e => setEmail(e.target.value)

  // const onRolesChanged = e => {
  //   const values = Array.from(
  //     e.target.selectedOptions, //HTMLCollection 
  //     (option) => option.value
  //   )
  //   setRoles(values)
  // }

  const canSave = [roles.length, validUsername, validPassword, validEmail, password2].every(Boolean) && !isLoading

  const onSaveUserClicked = async (e) => {
    e.preventDefault()
    if (password !== password2) {
      alert('Passwords doesnt match!')
      return
    }
    await addNewUser({ username, email, password, roles })
  }

  // const options = Object.values(ROLES).map(role => {
  //   return (
  //     <option
  //       key={role}
  //       value={role}

  //     > {role}</option >
  //   )
  // })

  const errClass = isError ? "errmsg" : "offscreen"
  const validUserClass = !validUsername ? 'form__input--incomplete' : ''
  const validPwdClass = !validPassword ? 'form__input--incomplete' : ''
  // const validRolesClass = !Boolean(roles.length) ? 'form__input--incomplete' : ''


  const content = (
    <section className="public">
      <header>
        <h1>Register</h1>
      </header>
      <main className="login">
        <p className={errClass}>{error?.data?.message}</p>

        <form className="form" onSubmit={onSaveUserClicked}>
          <label className="form__label" htmlFor="username">
            Username:
          </label>
          <input
            className={`form__input ${validUserClass}`}
            id="username"
            name="username"
            type="text"
            autoComplete="off"
            value={username}
            onChange={onUsernameChanged}
          />

          <label className="form__label" htmlFor="email">
            Email:
          </label>
          <input
            className={`form__input ${validUserClass}`}
            id="email"
            name="email"
            type="text"
            autoComplete="off"
            value={email}
            onChange={onEmailChanged}
          />

          <label className="form__label" htmlFor="password">
            Password: </label>
          <input
            className={`form__input ${validPwdClass}`}
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={onPasswordChanged}
          />

          <label className="form__label" htmlFor="password2">
            Check Password: </label>
          <input
            className={`form__input ${validPwdClass}`}
            id="password2"
            name="password2"
            type="password"
            onChange={onPassword2Changed}
          />
          <div>
            <button
              className="form__submit-button"
              title="Save"
              disabled={!canSave}
            >
              Save
            </button>
          </div>
          {/* 
        <label className="form__label" htmlFor="roles">
          ASSIGNED ROLES:</label>
        <select
          id="roles"
          name="roles"
          className={`form__select ${validRolesClass}`}
          multiple={true}
          size="3"
          value={roles}
          onChange={onRolesChanged}
        >
          {options}
        </select> */}

        </form>
      </main>
    </section>
  )

  return content
}
export default NewUserForm