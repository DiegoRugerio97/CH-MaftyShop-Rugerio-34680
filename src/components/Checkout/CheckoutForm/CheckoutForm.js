// CheckoutForm component - renders all CheckoutInput, manages data state, receives info from inputs.
// BS imports
import Form from 'react-bootstrap/Form';
// React imports
import { useState } from 'react';
// Custom component imports
import CheckoutInput from '../CheckoutInput/CheckoutInput';

const CheckoutForm = () => {
    // CONSTANT -  Generates CheckoutInputs based on this list.
    const DATA_TO_RETRIEVE = [{
        labelName: "Nombre",
        inputName: "name",
        errorMessage: "Por favor introduce tu información completa.",
        onValueChangeHandler: console.log
    },
    {
        labelName: "Apellido",
        inputName: "lastName",
        errorMessage: "Por favor introduce tu información completa.",
        onValueChangeHandler: console.log
    },
    {
        labelName: "Email",
        inputName: "email",
        errorMessage: "Por favor introduce una dirección de e-mail valida.",
        onValueChangeHandler: console.log
    },
    {
        labelName: "Teléfono",
        inputName: "phone",
        errorMessage: "Por favor introduce un teléfono valido.",
        onValueChangeHandler: console.log
    },
    {
        labelName: "Direccion",
        inputName: "address",
        errorMessage: "Por favor introduce una dirección valida.",
        onValueChangeHandler: console.log
    }];

    const [clientData, setClientData] = useState({ name: "", surname: "", email: "", phone: "", address: "" });

    const inputsToRender = DATA_TO_RETRIEVE.map((neededData => {
        return <CheckoutInput
            labelName={neededData.labelName} 
            inputName={neededData.inputName}
            errorMessage={neededData.errorMessage}
            onValueChangeHandler={neededData.onValueChangeHandler}/>
    }));

    return <>
        <Form>
            {inputsToRender}
        </Form>
    </>
}

export default CheckoutForm;