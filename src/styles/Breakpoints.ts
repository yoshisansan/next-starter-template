export const breakpoints = {
  ssm: '480px',
  sm: '680px',
  md: '720px',
  lg: '1024px',
  xxl: '1800px'
};

export const querySize = {
  max: {
    ssm: `(max-width: ${breakpoints.ssm})`,
    sm: `(max-width: ${breakpoints.sm})`,
    md: `(max-width: ${breakpoints.md})`,
    lg: `(max-width: ${breakpoints.lg})`,
    xxl: `(max-width: ${breakpoints.xxl})`
  },
  min: {
    ssm: `(min-width: ${breakpoints.ssm})`,
    sm: `(min-width: ${breakpoints.sm})`,
    md: `(min-width: ${breakpoints.md})`,
    lg: `(min-width: ${breakpoints.lg})`,
    xxl: `(min-width: ${breakpoints.xxl})`
  }
};
