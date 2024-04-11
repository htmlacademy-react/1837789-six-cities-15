export const formatDate = (date: Date): string => {
  const options : Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' } as const;
  return new Intl.DateTimeFormat('en-US', options).format(date);
};
