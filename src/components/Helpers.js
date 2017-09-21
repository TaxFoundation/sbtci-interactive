export const sortComparison = (key, order) => {
  return function(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    let comparison = 0;
    if (key === 'id') {
      if (a.id > b.id) { comparison = 1; }
      else if (a.id < b.id) { comparison = -1; }

      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    } else {
      if (a[key].rank > b[key].rank) { comparison = -1; }
      else if (a[key].rank < b[key].rank) { comparison = 1; }
      else if (a.id > b.id) { comparison = -1; }
      else if (a.id < b.id) { comparison = 1; }

      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    }
  };
};
