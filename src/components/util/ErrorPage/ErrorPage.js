// ErrorPage component - Appears when trying to access inexistent ID, category or when Firebase fetch fails.
// Styling
import "./ErrorPage.css";
// GIF
import errorGif from "../../../img/error.gif";
// Custom import
import CatalogButton from "../CatalogButton/CatalogButton";

const ErrorPage = ({ errorMessage }) => {
    return <div className="errorPage-container">
        <h1 className='errorPage-title'>Oops! Parece que hubo un error!</h1>
        <img src={errorGif} alt='Error' className='errorPage-img' />
        <h2 className='errorPage-subtitle'>{`Error: ${errorMessage}`}</h2>
        <CatalogButton/>
    </div>
}

export default ErrorPage;