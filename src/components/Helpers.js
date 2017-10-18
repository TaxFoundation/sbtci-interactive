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
      if (a[key].rank > b[key].rank) { comparison = 1; }
      else if (a[key].rank < b[key].rank) { comparison = -1; }
      else if (a.id > b.id) { comparison = 1; }
      else if (a.id < b.id) { comparison = -1; }

      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    }
  };
};

export const ordinal = (num) => {
  let a = num % 10;
  let b = num % 100;

  if (a === 1 && b !== 11) {
    return `${num}st`;
  }
  if (a === 2 && b !== 12) {
    return `${num}nd`;
  }
  if (a === 3 && b !== 13) {
    return `${num}rd`;
  }
  return `${num}th`;
};

export const fullName = (name) => {
  return name === 'Unemp. Insur. Taxes' ? 'Unemployment Insurance Taxes' : name;
};

export const setCookie = (name, value, expDays) => {
  const date = new Date();
  date.setTime(date.getTime() + (expDays*24*60*60*1000));
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

export const getCookie = (name) => {
  const cookieString = decodeURIComponent(document.cookie).split(';');
  const theCookie = cookieString.filter((cookie) => {
    return cookie.indexOf(name) > -1;
  })[0];
  return theCookie ? theCookie.split('=')[1] : null;
};