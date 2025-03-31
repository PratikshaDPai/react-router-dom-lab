import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LetterForm({ addLetter, mailboxes }) {
  const initialState = { mailboxId: 1, recipient: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addLetter(formData);
    setFormData(initialState);
    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  const handleChange = ({ target }) => {
    const value =
      target.name === "mailboxId" ? Number(target.value) : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  return (
    <>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select a Mailbox</label>
        <select
          id="mailboxId"
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
        >
          {mailboxes.map((mailbox) => (
            <option value={mailbox._id} key={mailbox._id}>
              Mailbox {mailbox._id}
            </option>
          ))}
        </select>
        <label htmlFor="recipient">Recipient</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          value={formData.recipient}
          placeholder="Recipient name"
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          placeholder="Message"
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
