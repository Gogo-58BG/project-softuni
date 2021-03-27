import { useEffect, useState } from 'react';
import * as traxxasServices from '../../Services/traxxasServices';
import { Link } from 'react-router-dom';


const Details = ({
    match
}) => {
    let [traxxas, setTraxxas] = useState({});
    
    useEffect(() => {
        traxxasServices.getOne(match.params.objectId)
            .then(res => setTraxxas(res));
            console.log(traxxas);
    }, []);

    // const onSaveSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(e.target);

    //     let traxxasId = match.params.traxxasId;
    //     let updatedTraxxas = {...traxxas, 
    //         title: e.target.title.value, 
    //         description: e.target.description.value,
    //         imageURL: e.target.imageURL.value,
    //         category: e.target.category.value,
    //     };

    //     traxxasServices.update(traxxasId, updatedTraxxas)
    //         .then(() => {
    //             history.push(`/traxxas/details/${traxxasId}`);
    //             return;
    //         });
    // }
    return (
        <div className="container details">
            <div className="details-content">
                <h2>{traxxas.title}</h2>
                <img className="detail-img" src={traxxas.imageURL} alt="traxxas-image" />
                <strong>{traxxas.category}</strong>
                <p>{traxxas.description}</p>
                <div className="buttons">
                    <a href="#" className="btn delete">Delete</a>
                    <a href="#" className="btn edit">Edit</a>
                    <Link to={'/'} className="btn edit">Back</Link>
                </div>
            </div>
        </div>
    );
}

export default Details;


