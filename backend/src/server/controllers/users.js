import db from "#root/db";
import generateUUID from "#root/helpers/generateUUID";

import got from 'got';
import accessEnv from "#root/helpers/accessEnv";
import moment from 'moment';
import hashSSN from "#root/helpers/hashSSN";

const { User } = db;


const getUsers = async (req, res, next) => {

    try {

        // get the users and obfuscate the ssn
        let users = await User.findAll().map(u => u.get({nest: true, plain:true, raw:true}));

        return res.json({
            success: true,
            message: "Users retrieved.",
            users: users.map(u => { return {...u, ssnHash: undefined}})
        });
    } catch (e) {
        return next(e);
    }
}

const postUser = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    // assign all the provided variables
    const { first_name, last_name, phone, full_address, ssn } = req.body;

    try {

        let newUser = await User.create({
            id: generateUUID(),
            ssnHash: hashSSN(ssn),
            first_name, last_name, phone, full_address
        })

        // obfuscate the ssn
        newUser = {...newUser.get({plain: true}), ssnHash: undefined}

        return res.json({
            success: true,
            message: "User created.",
            newUser
        });
    } catch (e) {
        return next(e);
    }
}


export default {
    getUsers,
    postUser
};

