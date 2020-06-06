export default class NewsService {
    API_URL = 'http://localhost:8080/api';
    BASE_ENDPOINT = 'articles'

    findAllPublished() {
        const endpoint = `${this.BASE_ENDPOINT}/published`;

        return fetch(`${this.API_URL}/${endpoint}`)
            .then(response => response.json())
            .then(response => response);
    }

    findAllArchived() {
        const endpoint = `${this.BASE_ENDPOINT}/archived`;

        return fetch(`${this.API_URL}/${endpoint}`)
            .then(response => response.json())
            .then(response => response);
    }

    remove(id) {
        const endpoint = `${this.BASE_ENDPOINT}/${id}`;

        return fetch(`${this.API_URL}/${endpoint}`, {method: 'DELETE'})
            .then(response => response.json())
            .then(response => response);
    }

    create(formData) {
        const data = new URLSearchParams();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        data.append('date', new Date().toISOString());

        return fetch(`${this.API_URL}/${this.BASE_ENDPOINT}`,
            {
                method: 'POST',
                body: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(response => response.json())
            .then(response => response);
    }

    archive(id) {
        const endpoint = `${this.BASE_ENDPOINT}/${id}`;
        const data = new URLSearchParams();
        data.append('archiveDate', new Date().toISOString());

        return fetch(`${this.API_URL}/${endpoint}`,
            {
                method: 'PUT',
                body: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(response => response.json())
            .then(response => response);
    }
}
