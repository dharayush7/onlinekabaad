// PageNotFound
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="d-flex align-items-center justify-content-center " style={{height:"80vh"}}>
     <div className="container text-center mt-5 mb-5">
       

       <h1 className="display-1">404</h1>
       <h2>Page Not Found</h2>
       <p className="lead">Sorry, the page you are looking for does not exist.</p>
       <Link to="/" className="btn btn-primary mt-5">
           Go back to Home
       </Link>
   </div>
        </div>
    
    );
};

export default PageNotFound;