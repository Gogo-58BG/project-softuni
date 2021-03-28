
import * as traxxasServices from '../../Services/traxxasServices';

const Create = ({
    history,
}) => {
    const onCreateTraxxasSubmitHandler = (e) => {
        e.preventDefault();

        const { title, description, imageURL, category } = e.target;

        traxxasServices.create(title.value, description.value, imageURL.value, category.value)
            .then(() => {
                history.push('/');
            })
    };

    return (
        <div class="container">
            <form onSubmit={onCreateTraxxasSubmitHandler}>
                <fieldset>
                    <legend>Create article</legend>
                    <p className="field title">
                        <input type="text" id="title" name="title" placeholder="Title" />
                        <label for="title">Title:</label>
                    </p>

                    <p className="field category">
                        <select name="category" id="category">
                            <option value="monster-trucks">Monster Trucks</option>
                            <option value="on-road-cars">On Road Cars</option>
                            <option value="short-course-trucks">Short Course Trucks</option>
                            <option value="stadium-trucks">Stadium Trucks</option>
                        </select>
                        <label for="category">Category:</label>
                    </p>
                    <p className="field category">
                        <input type="text" name="imageURL" id="imageURL" />
                        <label for="imgeURL">Image URL:</label>
                    </p>
                    <p class="field content">
                        <textarea name="description" id="content"></textarea>
                        <label for="description">Description:</label>
                    </p>

                    <p className="field submit">
                        <button class="btn submit" type="submit">Create</button>
                    </p>

                </fieldset>
            </form>
        </div>
    );
};

export default Create;