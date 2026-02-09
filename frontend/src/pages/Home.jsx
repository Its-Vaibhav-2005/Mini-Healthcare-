import SupportForm from "../components/SupportForm";

export default function Home() {
  return (
    <div className="app">
      <div className="page">
        <section className="hero glass-card">
          <h1>Mini Healthcare Support</h1>
          <p>
            Tell us what you need and we will route your request with the right
            level of urgency. Our care team is standing by to help you quickly.
          </p>
          <div className="meta-card glass-card">
            <div className="meta-item">
              <strong>Response window</strong>
              <span>Priority replies in under 2 hours</span>
            </div>
            <div className="meta-item">
              <strong>Channels supported</strong>
              <span>Secure email and callback</span>
            </div>
          </div>
        </section>

        <section className="glass-card form-card">
          <SupportForm />
        </section>
      </div>
    </div>
  );
}
