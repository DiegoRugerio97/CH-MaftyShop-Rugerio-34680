// CheckoutInput - Renders single input field with label, custom label value, receives setState function from parent CheckoutForm
// BS imports
import Form from 'react-bootstrap/Form';

const CheckoutInput = ({ labelName, inputName, errorMessage, onValueChangeHandler }) => {
    return <>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{labelName}</Form.Label>
            <Form.Control type="text" name={inputName} onChange={onValueChangeHandler} />
            <Form.Text className="text-muted">
                {errorMessage}
            </Form.Text>
        </Form.Group>
    </>
}

export default CheckoutInput;