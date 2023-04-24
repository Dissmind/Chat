import styled from "styled-components";
import { useState } from "react";


const registrationFetch = async (userName, password) => {
  const createDto = {
    nickname: userName,
    password: password
  }

  const url = `http://localhost:3000/auth/registration`

  const createdUserData = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(createDto)
  })

  const createdUser = await createdUserData.json()

  return createdUser
}

export const RegistrationPage = () => {

  const [isValidationCorrect, setIsValidationCorrect] = useState(true)
  const [isShowMessageValidationError, setIsShowMessageValidationError] = useState(false)


  const checkRepeatPassword = (password, passwordRepeat) => password == passwordRepeat

  const checkValidation = () => {

  }

  const [userNameInput, setUserNameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordRepeatInput, setPasswordRepeatInput] = useState('')


  const onRegister = async () => {

    if (!isValidationCorrect) {
      // TODO: display message about validation error
      setIsShowMessageValidationError(true)

      setTimeout(() => {
        setIsShowMessageValidationError(false)
      }, 5000)

      return
    }

    const registeredUser = await registrationFetch(userNameInput, passwordInput)
  }



  return (
    <RegistrationStl>
      <div>
        <TitleStl>Registration</TitleStl>

        <InputContainerStl>
          <LabelStl>Nickname:</LabelStl>
          <InputStl type="text" onChange={e => setUserNameInput(e.target.value)} value={userNameInput} />
        </InputContainerStl>

        <InputContainerStl>
          <LabelStl>Password:</LabelStl>
          <InputStl type="password" onChange={e => setPasswordInput(e.target.value)} value={passwordInput} />
        </InputContainerStl>

        <InputContainerStl>
          <LabelStl>Password repeat:</LabelStl>
          <InputStl type="password" onChange={e => setPasswordRepeatInput(e.target.value)} value={passwordRepeatInput} />
        </InputContainerStl>

        {
          (isShowMessageValidationError) && (
            <ErrorMessageStl>
              Validation error
            </ErrorMessageStl>
          )
        }

        <ButtonContainerStl>
          <ButtonStl
            onClick={onRegister}
          >Sign In</ButtonStl>
        </ButtonContainerStl>
      </div>
    </RegistrationStl>
  )
}


const RegistrationStl = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`

const TitleStl = styled.h1`
  display: flex;
  justify-content: center;
`

const InputContainerStl = styled.div`
  padding: 8px 16px;
`

const InputStl = styled.input`
  padding: 8px 4px;
  font-size: 16px;
  width: 200px;
`

const ButtonContainerStl = styled.div`
  display: flex;
  justify-content: center;
`
const LabelStl = styled.div`
  font-size: 15px;
  padding-bottom: 4px;
`

const ButtonStl = styled.button`
  font-size: 18px;
  padding: 6px 18px;
  cursor: pointer;
  margin-top: 12px;
`

const ErrorMessageStl = styled.div`
  color: red;
  text-align: center;
`