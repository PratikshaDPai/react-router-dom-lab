// src/App.jsx

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import { useState } from "react";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";

const App = () => {
  const [mailboxes, setMailboxes] = useState([
    {
      _id: 1,
      boxSize: "Small",
      boxOwner: "Alex",
    },
    {
      _id: 2,
      boxSize: "Large",
      boxOwner: "Bob",
    },
  ]);
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
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
};

export default App;
