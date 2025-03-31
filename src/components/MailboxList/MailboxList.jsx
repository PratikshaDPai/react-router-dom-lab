import { Link } from "react-router-dom";

export default function MailboxList({ mailboxes }) {
  return (
    <>
      <h1>Mailbox List</h1>
      <nav>
        <ul>
          {mailboxes.map((mailbox) => (
            <li key={mailbox._id} className="mail-box">
              <Link to={`/mailboxes/${mailbox._id}`}>
                Mailbox {mailbox._id}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
