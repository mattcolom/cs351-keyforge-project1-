import AccountForm from "../components/AccountForm.jsx";

export default function AccountView() {
  return (
    <section className="container section-space">
      <div className="account-layout row g-4 g-lg-5">
        <div className="col-lg-5 account-intro">
          <p className="eyebrow">YOUR SPACE AT KEYFORGE</p>
          <h1>Welcome back.</h1>
          <p>A great setup starts with a keyboard you love.</p>
          <div className="account-decoration" aria-hidden="true">
            <span>K</span>
            <span>F</span>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1">
          <div className="account-panel">
            <h2>Sign in</h2>
            <AccountForm />
            <p className="account-alternative">
              New to KeyForge? <a href="#create-account">Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
