// CheckoutForm component - renders all CheckoutInput, manages data state, receives info from inputs.
// BS imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// React imports
import { useEffect, useState } from 'react';
// Custom component imports
import TextInput from '../TextInput/TextInput';
// Styling
import "./CheckoutForm.css"

const CheckoutForm = ({ onSubmitClientData }) => {
    // CONSTANT -  Generates CheckoutInputs based on this list.
    const DATA_TO_RETRIEVE = [{
        labelName: "Nombre",
        inputName: "name",
        errorMessage: "Por favor introduce tu información completa.",
        validationType: "text"
    },
    {
        labelName: "Apellido",
        inputName: "lastName",
        errorMessage: "Por favor introduce tu información completa.",
        validationType: "text"
    },
    {
        labelName: "Email",
        inputName: "email",
        errorMessage: "Por favor introduce una dirección de e-mail valida.",
        validationType: "mail"
    },
    {
        labelName: "Confirma tu Email",
        inputName: "emailConf",
        errorMessage: "Por favor introduce una dirección de e-mail valida.",
        validationType: "mail"
    },
    {
        labelName: "Teléfono",
        inputName: "phone",
        errorMessage: "Por favor introduce un teléfono valido.",
        validationType: "phone"
    },
    {
        labelName: "Dirección",
        inputName: "address",
        errorMessage: "Por favor introduce una dirección valida.",
        validationType: "text"
    }];

    const [clientData, setClientData] = useState({ name: "", lastName: "", email: "", emailConf: "", phone: "", address: "" });
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const onInputChangeSetter = (field, value) => {
        setClientData({ ...clientData, [field]: value });
    }

    const inputsToRender = DATA_TO_RETRIEVE.map((dataField) => {
        return <TextInput key={dataField.inputName}
            labelName={dataField.labelName}
            inputName={dataField.inputName}
            errorMessage={dataField.errorMessage}
            onInputChangeSetter={onInputChangeSetter}
            validationType={dataField.validationType} />
    });

    useEffect(() => {
        const { email, emailConf } = clientData;
        setIsEmailValid(email === emailConf);
        Object.values(clientData).forEach((value) => {
            if (value.trim() === "") {
                setIsFormValid(isEmailValid && false);
            }
            else {
                setIsFormValid(isEmailValid && true);
            }
        });

    }, [clientData, isEmailValid])

    const onSubmitHandler = (e) => {
        const {emailConf, ...userData } = clientData;
        e.preventDefault();
        onSubmitClientData(userData);
    }


    return <>
        <Form className="checkoutForm" onSubmit={onSubmitHandler}>
            {inputsToRender}
            {!isEmailValid && <p>Email no coincide!</p>}
            <Button className='checkoutButton' variant="dark" type="submit" disabled={!isFormValid}>
                Generar Orden
            </Button>
        </Form>
    </>
}

export default CheckoutForm;