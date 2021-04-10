import { useEffect, useState } from 'react';
import * as traxxasServices from '../../Services/traxxasServices';
import { Link } from 'react-router-dom';

const Details = ({
    match,
    logedInUser,
}) => {
    let [traxxas, setTraxxas] = useState({});
    let userId = logedInUser?.objectId;

    useEffect( async () => {
       let res = await traxxasServices.getOne(match.params.objectId) 
       setTraxxas(res)
    }, []);

    let canEdit = Boolean(userId ? traxxas.ownerId == userId : false);

    return (
        <div className="container details">
            <div className="details-content">
                <h2>{traxxas.title}</h2>
                <img className="detail-img" src={traxxas.imageURL} alt="traxxas-image" />
                <strong>{traxxas.category}</strong>
                <p>{traxxas.description}</p>
                <div className="buttons">
                    {canEdit &&
                    <>
                        <Link to={`${traxxas.objectId}/delete`} className="btn delete">Delete</Link>
                            <Link to={`${traxxas.objectId}/edit`} className="btn edit">Edit</Link>
                            </>
                    }
                    <Link to={'/'} className="btn edit">Back</Link>
                </div>
            </div>
        </div>
    );
}

export default Details;


