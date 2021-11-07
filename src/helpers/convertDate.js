import monthConverter from './monthConverter';

function convertDate(ISOdate) {
  const date = new Date(ISOdate);
  const day = date.getDate();
  const month = monthConverter(date.getMonth());
  const year = date.getFullYear();

  return `Joined ${day} ${month} ${year}`;
}

export default convertDate;
