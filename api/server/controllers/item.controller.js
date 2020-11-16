import { config } from '../../config/config';
import axios from 'axios';
import APIError from '../helpers/APIError';

function getItems(req, res, next) {

    if (!(req.query && req.query.q && req.query.q.length > 0)) {
        const apiError = new APIError('Se debe incluir una keyword', 400, false);
        return next(apiError);

    }
    const query = req.query.q.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const url = `${config.mlApiUri}/search?q=${query}&limit=4`;

    axios.get(url).then((response) => {
        let categories = [];
        const availableFilters = response.data.available_filters;
        if (availableFilters.filter(filters => filters.id === 'category').length > 0) {
            categories = availableFilters.filter(filters => filters.id === 'category')[0].values.map(categories => categories.name)
        }

        const results = response.data.results;

        const apiResponse = {
            author: {
                name: 'Marcel',
                lastname: 'Cáceres',
            },
            categories: categories,
            items: results.map(result => {
                return {
                    id: result.id,
                    title: result.title,
                    picture: result.thumbnail,
                    condition: result.condition,
                    free_shipping: result.shipping.free_shipping,
                    price: {
                        currency: result.currency_id,
                        amount: result.price,
                        decimals: 0
                    }
                }
            })
        }

        res.json(apiResponse);


    }).catch((err) => {
        const apiError = new APIError('Error en api externa', 500, false);
        return next(apiError);
    });
}

function getItemById(req, res, next) {

    const url = `${config.apiUri}/items/${req.params.id}`;
    const urlDescription = `${config.apiUri}/items/${req.params.id}/description`;

    axios.all([
        axios.get(url),
        axios.get(urlDescription)
    ]).then(axios.spread((response, responseDescription) => {

        const apiResponse = {
            author: {
                name: 'Marcel',
                lastname: 'Cáceres',
            },
            item: {
                id: response.data.id,
                title: response.data.title,
                picture: response.data.secure_thumbnail,
                condition: response.data.condition,
                free_shipping: response.data.shipping.free_shipping,
                sold_quantity: response.data.sold_quantity,
                description: responseDescription.data.plain_text,
                price: {
                    currency: response.data.currency_id,
                    amount: response.data.price,
                    decimals: 2
                }
            }
        }

        res.json(apiResponse);


    })).catch(error => {
        console.log(error.response);
        if (error.response) {
            const apiError = new APIError(error.response.data.error, error.response.status, false);
            return next(apiError);
        } else {

        }

    });
}


export default {
    getItems,
    getItemById
}
