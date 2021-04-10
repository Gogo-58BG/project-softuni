import { useEffect, useState } from 'react';
import * as traxxasServices from '../../Services/traxxasServices';
import { Redirect } from 'react-router-dom';


const Delete = ({
    match,
    history,
}) => {
    let [traxxas, setTraxxas] = useState({});

    useEffect(() => {
        traxxasServices.getOne(match.params.objectId)
            .then(res => setTraxxas(res));
    }, []);

    const onDeleteSubmit = (e) => {
        e.preventDefault();

        let traxxasId = match.params.objectId;

        traxxasServices.deleteTraxxas(traxxasId)
{
                history.push(`/`);
                return;
            };
    }
    return (
        <div className="container">
            <form onSubmit={onDeleteSubmit}>
                <fieldset>
                    <legend>Delete article</legend>
                    <p className="field title">
                        <input type="text" name="title" id="title" defaultValue={traxxas.title} readOnly/>
                        <label for="title">Title:</label>
                    </p>
                    <p className="field category">
                        <select name="category" id="category" disabled>
                            <option value="monster-trucks" selected={traxxas.category == "monster-trucks"}>Monster Trucks</option>
                            <option value="on-road-cars" selected={traxxas.category == "on-road-cars"}>On Road Cars</option>
                            <option value="short-course-trucks" selected={traxxas.category == "short-course-trucks"}>Short Course Trucks</option>
                            <option value="stadium-trucks" selected={traxxas.category == "stadium-trucks"}>Stadium Trucks</option>
                        </select>
                        <label for="category">Category:</label>
                    </p>
                    <p className="field category">
                        <input type="text" name="imageURL" id="imageURL" defaultValue={traxxas.imageURL} readOnly/>
                        <label for="imageURL">Image URL:</label>
                    </p>
                    <p className="field content">
                        <textarea name="description" id="description" defaultValue={traxxas.description} readOnly></textarea>
                        <label for="content">Description:</label>
                    </p>
                    <p className="field submit">
                        <button className="btn submit" type="submit">Delete</button>
                    </p>
                </ fieldset>
            </form>
        </div>
    );
}

export default Delete;




