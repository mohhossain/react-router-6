import React from "react";

function Contact() {
  return (
    <div>
      <form>
        <label>First Name</label>
        <input type="text" name="first_name" />
        <label>Last Name</label>
        <input type="text" name="last_name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
