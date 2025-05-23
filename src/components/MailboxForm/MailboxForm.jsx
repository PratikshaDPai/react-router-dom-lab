import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MailboxForm({ addMailbox }) {
  const initialState = { boxOwner: "", boxSize: "Small" };
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addMailbox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter a Boxholder:</label>
        <input
          type="text"
          id="boxOwner"
          name="boxOwner"
          value={formData.boxOwner}
          placeholder="Boxholder name"
          onChange={handleChange}
          required
        />
        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          type="text"
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
