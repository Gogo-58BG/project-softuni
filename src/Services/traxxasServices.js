const url = 'https://eu-api.backendless.com/B4EDB4E2-4EBD-3705-FFDF-EBA4A7A96400/C8CD1CEC-82E6-47E0-829D-B2CD4B3580CE/data/traxxas';

export const getAll = () => {
    let traxxasUrl = url;
    console.log(traxxasUrl)
    return fetch(traxxasUrl)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const getOne = (objectId) => {
    return fetch(`${url}/${objectId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const create = (title, description, imageURL, category) => {
    let traxxas = {
        title,
        description,
        imageURL,
        category,
    };

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(traxxas)
    });
};

export const update = (objectId, traxxas) => {
    return fetch(`${url}/${objectId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(traxxas)
    });
};

export const deleteTraxxas = (objectId) => {
    return fetch(`${url}/${objectId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

