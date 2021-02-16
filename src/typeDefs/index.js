const { gql } = require('apollo-server')

module.exports = gql `
    type User {
        id: Int
        name: String
        email: String
    }

    type Query {
        users: [User]
    }
`