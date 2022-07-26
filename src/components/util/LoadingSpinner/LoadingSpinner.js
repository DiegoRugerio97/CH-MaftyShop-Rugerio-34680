import Spinner from 'react-bootstrap/Spinner';

import "./LoadingSpinner.css";


const LoadingSpinner = props => {
    return <div className="spinnerContainer">
        <Spinner animation="border" role="status" className="spinner">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h1>Cargando productos...</h1>
    </div>;
}

export default LoadingSpinner;