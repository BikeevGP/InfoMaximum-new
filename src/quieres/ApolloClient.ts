////// Этот документ служит для настройки подключения к серверу 
import ApolloClient from 'apollo-boost';

export const client:any = new ApolloClient({
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