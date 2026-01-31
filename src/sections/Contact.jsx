export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <h2 className="section-title">Contact Me</h2>
      <form className="max-w-xl space-y-4">
        <input className="input" placeholder="Name" />
        <input className="input" placeholder="Email" />
        <textarea className="input" placeholder="Message" />
        <button className="btn">Send</button>
      </form>
    </section>
  );
}
