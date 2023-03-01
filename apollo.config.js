module.exports = {
  client: {
    includes: ['./src/**/*.graphql'],
    excludes: ['./src/types/gql.ts'],
    service: {
      name: 'stormix-cms',
      url: 'https://cms.stormix.co/graphql',
      // optional headers
      headers: {
        authorization:
          'Bearer 88d19b52e4dbb7690114406ea29b33e8e251b981b45c21851c524d05c2d45cb306cf2af44c499a80bd60b74d233570cac63c91ff79da26322fc74e64459761ff5b66c668d8fdb08dbf2786d7f44ad360349fce50d4c4db688c0bfa9ca707f1456bb2ee840f715d5f3c876bc4d91825699f0969ca57a1eabf8c8da5eec0ffc093',
      },
      // optional disable SSL validation check
      skipSSLValidation: true,
    },
  },
};
