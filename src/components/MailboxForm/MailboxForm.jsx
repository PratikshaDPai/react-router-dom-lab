import { useState } from "react";

export default function MailboxForm({ mailboxes }) {
  const initialState = { boxOwner: "", boxSize: "Small" };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // TODO : complete submit logic
    console.log(formData);
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
        <label htmlFor="weight">Weight:</label>
        <select
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
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
