export default class NewsService {
    API_URL = 'http://localhost:8080/api/';
    BASE_ENDPOINT = 'articles/'

    findAll() {
        const endpoint = 'products?_sort=id&_order=desc';

        return fetch(`${this.API_URL}${endpoint}`)
            .then(response => response.json())
            .then(response => response);
    }

    search(query = '') {
        const endpoint = `products/?q=${query}&_sort=id&_order=desc`;

        return fetch(`${this.API_URL}${endpoint}`)
            .then(response => response.json())
            .then(response => response);
    }

    remove(id) {
        const endpoint = `products/${id}`;

        return fetch(`${this.API_URL}${endpoint}`, {method: 'DELETE'})
            .then(response => response.json())
            .then(response => response);
    }

    create(formData) {
        const endpoint = 'products';
        const data = new URLSearchParams();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));

        return fetch(`${this.API_URL}${endpoint}`,
            {
                method: 'POST',
                body: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(response => response.json())
            .then(response => response);
    }

    update(id, formData) {
        const endpoint = `products/${id}`;
        const data = new URLSearchParams();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));

        return fetch(`${this.API_URL}${endpoint}`,
            {
                method: 'PUT',
                body: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(response => response.json())
            .then(response => response);
    }
}
