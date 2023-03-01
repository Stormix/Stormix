import type { CodegenConfig } from '@graphql-codegen/cli';

const token = `Bearer ${process.env.VITE_API_KEY}`;
const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://cms.stormix.co/graphql': {
        headers: {
          Authorization: token,
        },
      },
    },
  ],
  documents: ['src/gql/**/*.graphql', 'src/gql/**/*.tsx'],
  generates: {
    'src/types/gql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
