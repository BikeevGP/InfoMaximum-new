import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
    uri: "http://localhost:4000/api",
    request: async operation => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ""
            }
        })
    }
});