/**
 * Created by emile on 01/09/2017.
 */

const links = [
    {
        id: 1,
        url: 'http://graphql.org/',
        description: 'The Best Query Language'
    },
    {
        id: 2,
        url: 'http://dev.apollodata.com',
        description: 'Awesome GraphQL Client'
    },
];

module.exports = {
    Query: {
        allLinks: () => links,
    },
};