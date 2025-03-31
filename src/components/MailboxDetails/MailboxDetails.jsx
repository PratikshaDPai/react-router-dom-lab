import { useParams } from "react-router-dom";

export default function MailboxDetails({ mailboxes, letters }) {
  const params = useParams();
  const mailboxId = Number(params.mailboxId);
  const mailbox = mailboxes.find((mailbox) => mailbox._id === mailboxId);
  if (mailbox) {
    return (
      <>
        <h1>Mailbox {mailboxId}</h1>
        <section>
          <h2>Details</h2>
          <p>Boxholder: {mailbox.boxOwner}</p>
          <p>Box Size: {mailbox.boxSize}</p>
        </section>
        <section>
          <h2>Letters</h2>
          {letters
            .filter((letter) => letter.mailboxId === mailboxId)
            .map((letter, index) => (
              <p key={index}>{letter.message}</p>
            ))}
        </section>
      </>
    );
  }
  return <h1>Mailbox not found!</h1>;
}
