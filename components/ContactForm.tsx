"use client";

export function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = data.get("name") as string;
        const email = data.get("email") as string;
        const experience = data.get("experience") as string;
        const course = data.get("course") as string;
        const message = data.get("message") as string;
        const body = `Name: ${name}%0AEmail: ${email}%0AExperience: ${experience}%0ACourse: ${course}%0A%0AMessage:%0A${message}`;
        window.location.href = `mailto:jay@gardnerunderwater.com?subject=Course Inquiry&body=${body}`;
      }}
      style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
    >
      <div className="form-group">
        <label htmlFor="name" className="form-label">Full Name</label>
        <input id="name" name="name" type="text" className="form-input" placeholder="Your name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input id="email" name="email" type="email" className="form-input" placeholder="you@example.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="experience" className="form-label">Diving Experience</label>
        <select id="experience" name="experience" className="form-select">
          <option value="">Select your level</option>
          <option value="open-water">Open Water certified</option>
          <option value="advanced">Advanced / AOW</option>
          <option value="rescue">Rescue certified</option>
          <option value="technical">Technical diver</option>
          <option value="cave">Cave certified</option>
          <option value="instructor">Dive instructor</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="course" className="form-label">Course Interest</label>
        <select id="course" name="course" className="form-select">
          <option value="">Select a course</option>
          <option value="essentials">UTD Basic / Essentials</option>
          <option value="level1">UTD Level 1 / Certec</option>
          <option value="tech1">UTD Tech 1</option>
          <option value="tech2">UTD Tech 2</option>
          <option value="ccr">CCR (JJ-CCR / KISS)</option>
          <option value="cave">Full Cave Certification</option>
          <option value="sidemount">Sidemount Specialist</option>
          <option value="rescue">Rescue Diver</option>
          <option value="other">Other / Not sure</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder="Tell me about your goals, your experience, and what you want to work on..."
          rows={5}
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
        Send Message
      </button>
    </form>
  );
}