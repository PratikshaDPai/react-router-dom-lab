// src/App.jsx

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import { useState } from "react";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import LetterForm from "./components/LetterForm/LetterForm";

let nextMailboxId = 1;

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  function addMailbox(mailbox) {
    const newMailboxes = [...mailboxes];
    newMailboxes.push({ _id: nextMailboxId, ...mailbox });
    nextMailboxId++;
    setMailboxes(newMailboxes);
  }

  function addLetter(letter) {
    const newLetters = [...letters];
    newLetters.push(letter);
    setLetters(newLetters);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addMailbox={addMailbox} />}
        />
        <Route
          path="/new-letter"
          element={<LetterForm addLetter={addLetter} mailboxes={mailboxes} />}
        />
        <Route
          path="*"
          element={
            <>
              <h1>Page not found</h1>
              <h2>Whoops, nothing here!</h2>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
