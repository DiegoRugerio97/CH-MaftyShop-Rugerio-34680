// LoadingSpinner component - Show when state isLoading = true in any other component while fetching
import Spinner from 'react-bootstrap/Spinner';
// Styling
import "./LoadingSpinner.css";

const LoadingSpinner = ({text}) => {
    return <div className="spinnerContainer">
        <Spinner animation="border" role="status" className="spinner">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h2>{text}</h2>
    </div>;
}

export default LoadingSpinner;