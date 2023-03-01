export type Unboxed<T> = T extends (infer U)[] ? U : T;
export type ValueOf<T> = T[keyof T];
type NonNullable<T> = Exclude<T, null | undefined>; // Remove null and undefined from T
