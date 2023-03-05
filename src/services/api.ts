import axios from 'axios';

const name = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/geocode'
});

const position = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/geocode'
});

export const api = {
    name,
    position
};