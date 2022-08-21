// TextInput - Renders single input text field with label, custom label value, receives setState function from parent CheckoutForm
// BS imports
import Form from 'react-bootstrap/Form';
// React imports
import { useState } from 'react';
// Styling 
import "./TextInput.css";

const TextInput = ({ labelName, inputName, errorMessage, onInputChangeSetter, validationType }) => {

    const [inputValue, setInputValue] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [wasTouched, setWasTouched] = useState(false);

    const onChangeValueHandler = (e) => {
        setInputValue(() => e.target.value);
    }

    const onBlurValidationHandlerText = () => {
        setWasTouched(true);
        onInputChangeSetter(inputName, inputValue);
        const isValueValid = inputValue.trim() !== "";
        if (!isValueValid) {
            setIsValid(false);
            return;
        }
        setIsValid(isValueValid);
    }

    const onBlurValidationHandlerEmail = () => {
        setWasTouched(true);
        onInputChangeSetter(inputName, inputValue);
        const isValueValid = inputValue.trim() !== "" && inputValue.includes("@") && inputValue.includes(".");
        if (!isValueValid) {
            setIsValid(false);
            return;
        }
        setIsValid(isValueValid);
    }

    const onBlurValidationHandlerPhone = () => {
        setWasTouched(true);
        onInputChangeSetter(inputName, inputValue);
        const isValueValid = inputValue.trim() !== "" && inputValue.match(/^\d+$/);
        if (!isValueValid) {
            setIsValid(false);
            return;
        }
        setIsValid(isValueValid);
    }

    const inputClass = `textInputField ${!isValid && wasTouched ? "invalidInput" : ""}`;
    const messageClass = `textInputMessage ${!isValid && wasTouched ? "invalidMessage" : "hiddenMessage"}`;

    let validationFunction;
    if (validationType === "text") {
        validationFunction = onBlurValidationHandlerText;
    }
    else if (validationType === "mail") {
        validationFunction = onBlurValidationHandlerEmail;
    }
    else if (validationType === "phone") {
        validationFunction = onBlurValidationHandlerPhone;
    }

    return <>
        <Form.Group controlId="inputName" className='textInput'>
            <Form.Label className='textInputLabel'>{labelName}</Form.Label>
            <Form.Control className={inputClass} type="text" name={inputName} onChange={onChangeValueHandler} onBlur={validationFunction} value={inputValue} />
            <Form.Text className={messageClass}>
                {errorMessage}
            </Form.Text>
        </Form.Group>
    </>
}

export default TextInput;