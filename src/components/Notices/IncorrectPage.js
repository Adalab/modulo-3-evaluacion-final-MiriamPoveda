import {Link} from 'react-router-dom';

function IncorrectPage() {
    return (
        <>
        <p>
            Wow! I don't understand where we are. You'd better come back to my fantastic site.
        </p>
        <Link to="/">
            Back
        </Link>
        </>
    )
}

export default IncorrectPage;