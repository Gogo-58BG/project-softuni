import { useEffect, useState } from 'react';
import * as traxxasServices from '../../Services/traxxasServices';


const Edit = ({
    match,
    history,
}) => {
    let [traxxas, setTraxxas] = useState({});

    useEffect(() => {
        traxxasServices.getOne(match.params.objectId)
            .then(res => setTraxxas(res));
    }, []);

    const onSaveSubmit = (e) => {
        e.preventDefault();

        let traxxasId = match.params.objectId;
        let updatedTraxxas = {...traxxas, 
            title: e.target.title.value, 
            description: e.target.description.value,
            imageURL: e.target.imageURL.value,
            category: e.target.category.value,
        };

        traxxasServices.update(traxxasId, updatedTraxxas)
            .then(() => {
                history.push(`/traxxas/details/${traxxasId}`);
                return;
            });
    }
    return (
        <div className="container">
            <form onSubmit={onSaveSubmit}>
                <fieldset>
                    <legend>Edit article</legend>
                    <p className="field title">
                        <input type="text" name="title" id="title" defaultValue={traxxas.title} />
                        <label for="title">Title:</label>
                    </p>
                    <p className="field category">
                        <select name="category" id="category">
                            <option value="monster-trucks" selected={traxxas.category == "monster-trucks"}>Monster Trucks</option>
                            <option value="on-road-cars" selected={traxxas.category == "on-road-cars"}>On Road Cars</option>
                            <option value="short-course-trucks" selected={traxxas.category == "short-course-trucks"}>Short Course Trucks</option>
                            <option value="stadium-trucks" selected={traxxas.category == "stadium-trucks"}>Stadium Trucks</option>
                        </select>
                        <label for="category">Category:</label>
                    </p>
                    <p className="field category">
                        <input type="text" name="imageURL" id="imageURL" defaultValue={traxxas.imageURL} />
                        <label for="imageURL">Image URL:</label>
                    </p>
                    <p className="field content">
                        <textarea name="description" id="description" defaultValue={traxxas.description}></textarea>
                        <label for="content">Description:</label>
                    </p>
                    <p className="field submit">
                        <button className="btn submit" type="submit">Edit</button>
                    </p>
                </ fieldset>
            </form>
        </div>
    );
}

export default Edit;




