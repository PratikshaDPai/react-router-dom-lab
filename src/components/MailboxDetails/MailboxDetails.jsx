import { useParams } from "react-router-dom";

export default function MailboxDetails({ mailboxes }) {
  const params = useParams();
  const mailboxId = Number(params.mailboxId);
  const mailbox = mailboxes.find((mailbox) => mailbox._id === mailboxId);
  if (mailbox) {
    return (
      <>
        <h1>Mailbox {mailboxId}</h1>
        <h2>Details</h2>
        <p>Boxholder: {mailbox.boxOwner}</p>
        <p>Box Size: {mailbox.boxSize}</p>
      </>
    );
  }
  return <h1>Mailbox not found!</h1>;
}
