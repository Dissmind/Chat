import styled from "styled-components";
import { useState } from "react";


export const RegistrationPage = () => {

  const [isValidation, setIsValidation] = useState(false)
  const [isShowMessageValidationError, setIsShowMessageValidationError] = useState(false)


  const checkRepeatPassword = (password, passwordRepeat) => password == passwordRepeat

  const checkValidation = () => {

  }

  const onRegister = () => {

    if (!isValidation) {
      // TODO: display message about validation error
      setIsShowMessageValidationError(true)

      setTimeout(() => {
        setIsShowMessageValidationError(false)
      }, 5000)

      return
    }


  }



  return (
    <RegistrationStl>
      <div>
        <TitleStl>Registration</TitleStl>

        <InputContainerStl>
          <LabelStl>Nickname:</LabelStl>
          <InputStl type="text" />
        </InputContainerStl>

        <InputContainerStl>
          <LabelStl>Password:</LabelStl>
          <InputStl type="password" />
        </InputContainerStl>

        <InputContainerStl>
          <LabelStl>Password repeat:</LabelStl>
          <InputStl type="password" />
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