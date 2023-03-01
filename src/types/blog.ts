import { Unboxed } from './common';
import { ArticlesQuery } from './gql';

export type Article = NonNullable<Unboxed<NonNullable<ArticlesQuery['articles']>['data']>>;
