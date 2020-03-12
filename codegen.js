module.exports = {
  schema: [
    {
      'http://localhost:8080/v1/graphql': {}
    }
  ],
  documents: ['./src/**/*.ts'],
  overwrite: true,
  generates: {
    './src/types/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        skipTypename: false,
        withHooks: false,
        withHOC: false,
        withComponent: false
      }
    },
    './schema.json': {
      plugins: ['introspection']
    }
  }
};
