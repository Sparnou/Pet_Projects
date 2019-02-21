export default (string:string): string => {

  if (typeof string === 'string') {

    const username = string.split(' ');

    if (username.length === 2) {
      return username[0].charAt(0).toUpperCase() + username[0].slice(1)
        + ' ' + username[1].charAt(0).toUpperCase() + username[1].slice(1);
    }

    return username[0].charAt(0).toUpperCase() + string.slice(1);
  }

  return string;
}
