import { useRef, useState } from "react";
import { states, validateAccount } from "../utils/validation.js";
import Icon from "./Icon.jsx";

const empty = {
  username: "",
  password: "",
  email: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
};
export default function AccountForm({ create = false }) {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef(null);
  const update = (event) => {
    const next = { ...values, [event.target.name]: event.target.value };
    setValues(next);
    if (submitted) setErrors(validateAccount(next, create));
  };
  const submit = (event) => {
    event.preventDefault();
    const nextErrors = validateAccount(values, create);
    setErrors(nextErrors);
    setSubmitted(true);
    if (Object.keys(nextErrors).length) {
      formRef.current.elements.namedItem(Object.keys(nextErrors)[0])?.focus();
      return;
    }
    setValues(empty);
    setSuccess(true);
    setShowPassword(false);
  };
  const field = (name, label, type = "text", required = false, help = "") => (
    <div className="mb-3" key={name}>
      <label className="form-label" htmlFor={name}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <div className={name === "password" ? "password-field" : undefined}>
        <input
          id={name}
          name={name}
          type={name === "password" && showPassword ? "text" : type}
          value={values[name]}
          onChange={update}
          className={`form-control ${errors[name] ? "is-invalid" : ""}`}
          required={required}
          maxLength={name === "password" ? 72 : name === "street" ? 100 : 100}
          autoComplete={
            name === "username"
              ? "username"
              : name === "password"
                ? create
                  ? "new-password"
                  : "current-password"
                : name === "street"
                  ? "address-line1"
                  : name === "city"
                    ? "address-level2"
                    : name === "zip"
                      ? "postal-code"
                      : name === "phone"
                        ? "tel"
                        : name
          }
          aria-invalid={!!errors[name]}
          aria-describedby={
            [help ? `${name}-help` : "", errors[name] ? `${name}-error` : ""]
              .filter(Boolean)
              .join(" ") || undefined
          }
        />
        {name === "password" && (
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {help && (
        <p className="form-text mb-0" id={`${name}-help`}>
          {help}
        </p>
      )}
      {errors[name] && (
        <p className="field-error" id={`${name}-error`}>
          {errors[name]}
        </p>
      )}
    </div>
  );
  if (success)
    return (
      <div className="account-success" role="status">
        <span className="empty-icon">
          <Icon name="check" size={32} />
        </span>
        <h2>
          {create
            ? "Your details passed validation."
            : "Your sign-in details passed validation."}
        </h2>
        <p>
          {create
            ? "This demo does not create or save a real account."
            : "This demo does not authenticate or sign you into a real account."}{" "}
          Your password has been cleared.
        </p>
        <a href="#shop" className="btn btn-dark">
          Explore keyboards
        </a>
        <button
          type="button"
          className="btn btn-link"
          onClick={() => {
            setSuccess(false);
            setSubmitted(false);
            setErrors({});
          }}
        >
          Try the form again
        </button>
      </div>
    );
  return (
    <form ref={formRef} onSubmit={submit} noValidate>
      {Object.keys(errors).length > 0 && (
        <div className="alert alert-danger" role="alert">
          Please correct {Object.keys(errors).length}{" "}
          {Object.keys(errors).length === 1 ? "field" : "fields"} below.
        </div>
      )}
      <p className="required-note">* Required fields</p>
      {field(
        "username",
        "Username",
        "text",
        true,
        "3–20 letters, numbers, or underscores.",
      )}
      {field(
        "password",
        "Password",
        "password",
        true,
        "8–72 characters. Use a sample password for this demo.",
      )}
      {create && (
        <>
          {field("email", "Email", "email", true)}
          <div className="optional-heading">
            <span>Address & contact</span>
            <span>Optional · US format</span>
          </div>
          {field("street", "Street address")}
          <div className="row">
            <div className="col-sm-6">{field("city", "City")}</div>
            <div className="col-sm-6 mb-3">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <select
                id="state"
                name="state"
                value={values.state}
                onChange={update}
                autoComplete="address-level1"
                className={`form-select ${errors.state ? "is-invalid" : ""}`}
                aria-invalid={!!errors.state}
                aria-describedby={errors.state ? "state-error" : undefined}
              >
                <option value="">Choose a state</option>
                {states.map((state) => (
                  <option key={state}>{state}</option>
                ))}
              </select>
              {errors.state && (
                <p className="field-error" id="state-error">
                  {errors.state}
                </p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">{field("zip", "ZIP code")}</div>
            <div className="col-sm-6">{field("phone", "Phone", "tel")}</div>
          </div>
        </>
      )}
      <button type="submit" className="btn btn-dark w-100 mt-2">
        {create ? "Create account" : "Sign in"}
      </button>
      <p className="demo-form-note">
        Browser-only demo. Your details are not saved or sent anywhere.
      </p>
    </form>
  );
}
