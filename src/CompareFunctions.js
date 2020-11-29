export function CompareByRegistr(a, b) {
  let a_date = new Date(a.registration_date);
  let b_date = new Date(b.registration_date);
  if (a_date > b_date) {
    return 1;
  }
  if (a_date < b_date) {
    return -1;
  }
  return 0;
}

export function CompareByRating(a, b) {
  if (a.rating > b.rating) {
    return 1;
  }
  if (a.rating < b.rating) {
    return -1;
  }
  return 0;
}
