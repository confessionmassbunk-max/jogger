const fetch = require('node-fetch');

const query = `
{
  products(first: 10) {
    edges {
      node {
        handle
        title
      }
    }
  }
}
`;

fetch('https://laze-lab.myshopify.com/api/2023-10/graphql.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': 'fd04f3df73d9dcd4b5a89041f6670758',
  },
  body: JSON.stringify({ query })
})
.then(res => res.json())
.then(data => console.log(JSON.stringify(data, null, 2)))
.catch(err => console.error(err));
