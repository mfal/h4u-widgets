// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const context = require.context("./", true, /\.tsx$/);

export const load = (): void => {
  context.keys().forEach((c) => context(c));
};

export default load;
