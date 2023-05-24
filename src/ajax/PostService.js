import axios from "axios";

export default class PostService {
    static async getAll() {
        let posts = await axios.get('https://jsonplaceholder.typicode.com/posts/');
        return posts;
    }

    static async getCertain(id) {
        let posts = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        return posts;
    }
}