
const axios = require('axios')

module.exports.getContent = () => {
  return axios.post('http://0.0.0.0:3030/batch', {
    content: {
      name: 'ProductList',
      data: {
        title: 'Series',
        items: [
          {
            title: 'Serie',
            imageUrl: 'https://via.placeholder.com/400'
          }
        ]
      }
    }
  })
    .then(({ data }) => {
      return data.results.content
    })
}
