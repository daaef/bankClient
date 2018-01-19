import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CreateBank from './CreateBank'
import '../node_modules/uikit/dist/js/uikit.min'
import '../node_modules/uikit/dist/css/uikit.min.css'
import '../node_modules/uikit/dist/js/uikit-icons.min'
// 1
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// 2
const httpLink = new HttpLink({ uri: 'http://localhost:4000/' })

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
        <App />
  </ApolloProvider>
  , document.getElementById('root')
);
registerServiceWorker();

