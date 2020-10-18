import axios from 'axios';

let host = "jsonplaceholder.typicode.com";
let port = "80";
let prefix = "";
let baseURL = "http://" + host + ':' + port + "/" + prefix;

export function request(config) {
    const instance = axios.create({
            baseURL:baseURL,
            timeout:100000
    });

    return instance(config);

}
