import type { CodegenConfig } from '@graphql-codegen/cli';

const token = `Bearer ${process.env.VITE_API_KEY}`;
const config: CodegenConfig = {
  schema: [
    {
      'https://cms.stormix.co/graphql': {
        headers: {
          Authorization: token,
        },
      },
    },
  ],
  documents: ['src/gql/**/*.graphql'],
  generates: {
    './src/types/gql/': {
      preset: 'client',
    },
  },
};
export default config;
