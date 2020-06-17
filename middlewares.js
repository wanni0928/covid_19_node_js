import routes from "./routes";
import request from "request-promise-native";
import dotenv from "dotenv";

import mongoose from "mongoose";
import Country from "./models/Countries"

dotenv.config();

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "COVID-19 API"
    res.locals.routes = routes;
    res.locals.loggedUser = {
        id : "19192340asdqwe",
        name : "wanni",
        email : "chlgudwnd123@gmail.com"
    }
    next();
}
// https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics/details
export const covidSearch = (req, res, next) => {
    const {
        params :{id}
    } = req;
    // console.log(123432543567787896798, id);

    const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        qs: {
            country: id
        },
        headers: {
          'x-rapidapi-host': 'covid-193.p.rapidapi.com',
          'x-rapidapi-key': process.env.COVID_API_KEY
        },
        json : true
    };

    request(options)
    .then(data => 
        data.response
        )
    .then(response => {
        // console.log(response[0]);
        res.locals.queries = response[0];
        // console.log(res.locals.queries);
        next();
    })
    .catch(err => {
        console.log(err);
    });
}
// export const covidCountry = (req, res)