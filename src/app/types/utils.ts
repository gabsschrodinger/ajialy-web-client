export type PropsExcept<T, O extends keyof T> = Pick<
  T,
  {
    [K in keyof T]: K extends O ? never : K;
  }[keyof T]
>;
