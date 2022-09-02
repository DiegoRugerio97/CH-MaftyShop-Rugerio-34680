// AboutUs component - Present information about component
// BS imports
import Container from 'react-bootstrap/Container';
// Styling
import "./AboutUs.css";
// Image
import Photo from "../../img/img2.jpg";

const AboutUs = () => {
    return <Container className='about'>
        <h1 className='about-title'>Somos Mafty Shop</h1>
        <article className='about-content'>
            Somos una tienda dedicada a traerte lo mejor del mundo del anime al mejor precio.
            <br/>
            Nos especializamos en figuras de tus personajes favoritos, modelos a escala del anime Gundam (Gunpla) y las series de manga mas populares.
            <br/>
            <strong>¡Todo directamente importado desde Japón!</strong>
            <img className='about-image' src={Photo} alt="Anime Shop"/>
        </article>
    </Container>
}

export default AboutUs;