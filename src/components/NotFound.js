import { Link } from 'react-router-dom';
// import PageNotFound from '../assets/images/PageNotFound';


const NotFound = () => {
    return <div>
        {/* <img src={PageNotFound}  /> */}
        <p style={{textAlign:"center"}}>
            <Link to="/">Volver al inicio </Link>
        </p>
        </div>
}

export default NotFound;