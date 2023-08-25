
require('dotenv').config()

import mongoose, { connect } from 'mongoose';

const url = `mongodb://${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;


    connect(url,
        {
            // useNewUrlParser: true,
            user: process.env.MONGO_USERNAME,
            pass: process.env.MONGO_PASSWORD,
            authSource: "admin",
        }
    )
    .then(
        db => {
            // console.log(db);
            console.log(`db connected (${url}).`);
        }
    )
    .catch(
        e => {
            console.log(e);
            console.log(`db connected (${url}).`);
        }
    );

export default mongoose;