export type IChromeStore<T> = [
  T,
  (value: T | null | undefined) => void,
  boolean,
  string,
];
