export const states = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];
export function validateAccount(values, create = true) {
  const errors = {};
  const username = values.username.trim();
  if (!username) errors.username = "Enter a username.";
  else if (!/^[A-Za-z0-9_]{3,20}$/.test(username))
    errors.username = "Use 3–20 letters, numbers, or underscores.";
  if (!values.password.trim()) errors.password = "Enter a password.";
  else if (values.password.length < 8 || values.password.length > 72)
    errors.password = "Use 8–72 characters.";
  if (!create) return errors;
  if (!values.email.trim()) errors.email = "Enter an email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Enter a valid email, such as matt@example.com.";
  if (
    values.street.trim() &&
    (values.street.trim().length < 5 || values.street.trim().length > 100)
  )
    errors.street = "Enter a complete street address (5–100 characters).";
  if (
    values.city.trim() &&
    (!/^[\p{L} .'-]{2,60}$/u.test(values.city.trim()) ||
      !/\p{L}/u.test(values.city))
  )
    errors.city =
      "Enter a city name using letters, spaces, periods, apostrophes, or hyphens.";
  if (values.state && !states.includes(values.state))
    errors.state = "Choose a valid US state.";
  if (values.zip.trim() && !/^\d{5}(-\d{4})?$/.test(values.zip.trim()))
    errors.zip = "Use a 5-digit ZIP or ZIP+4 (12345-6789).";
  if (values.phone.trim()) {
    const digits = values.phone.replace(/\D/g, "");
    if (
      !/^[\d\s()+.\-]+$/.test(values.phone) ||
      !(/^[2-9]\d{9}$/.test(digits) || /^1[2-9]\d{9}$/.test(digits))
    )
      errors.phone = "Enter a 10-digit US phone number, optionally with +1.";
  }
  return errors;
}
