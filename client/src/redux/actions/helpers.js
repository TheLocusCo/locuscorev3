
export function generateDate(mode) {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  let day = currentDate.getDate();
  switch (mode) {
    case "oneYearFromNow":
      return (new Date(year + 1, month, day))
    default:
      return (currentDate)
  }
}
