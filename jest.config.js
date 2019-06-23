module.exports = {
    reporters: [
        'default',
        // if CI is in environment, add jest-junit reporter
        ...((process.env.CI !== undefined)? ['jest-junit'] : []),
    ]
};
