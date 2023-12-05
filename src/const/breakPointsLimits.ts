export const brackPointsLimits = {
  sm: { alias: 'sm', value: 640 },
  md: { alias: 'md', value: 768 },
  lg: { alias: 'lg', value: 1024 },
  xl: { alias: 'xl', value: 1280 },
  '2xl': { alias: '2xl', value: 1536 },
} as const;

export type brackPointsLimitsEnumKeys = keyof typeof brackPointsLimits;
