import AccountForm from "../components/AccountForm.jsx";

export default function CreateAccountView() {
  return (
    <section className="container section-space">
      <div className="account-layout row g-4 g-lg-5">
        <div className="col-lg-5 account-intro">
          <p className="eyebrow">MAKE YOURSELF AT HOME</p>
          <h1>
            Good keys.
            <br />
            Great company.
          </h1>
          <p>
            Find your feel, pick your finish, and make your desk a little more
            yours.
          </p>
          <div className="account-decoration" aria-hidden="true">
            <span>K</span>
            <span>F</span>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1">
          <div className="account-panel">
            <h2>Create an account</h2>
            <AccountForm create />
            <p className="account-alternative">
              Already have an account? <a href="#account">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
