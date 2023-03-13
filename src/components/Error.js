import { Link } from "react-router-dom"

const Error = () => {
    return ( 
        <>
            <Link to=".." relative="path">Go Back!</Link>
            <h1>Error: Page not found!</h1>
        </>
    );
}
 
export default Error;