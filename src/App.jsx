// src/App.jsx

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import { useState } from "react";

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
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
};

export default App;
