export const numFormatter = (num) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(0) + 'k'; // convert to k for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(0) + 'm'; // convert to m for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
};

export const sortData = (data, field) => {
  console.log(data[0]);
  data.sort((a, b) => {
    return b[field] - a[field];
  });
  return data;
};
