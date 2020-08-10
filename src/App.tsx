import React, { useState } from "react";
import TableExample from "./TableExample";
import MyModal from "./Components/MyModal"; // First example - using Omit
// import MyModal from "./Components/MyModal2"; // Second example - using Pick
// import MyModal from "./Components/MyModal3"; // Third example - using Partial

import "./App.css";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);
  return (
    <div>
      <h1>Table Example</h1>
      <TableExample />
      <h1>Modal Example</h1>
      <div onClick={toggleModal} className={"toggle"}>
        Open modal
      </div>
      <MyModal isOpen={modalOpen} width={400} height={400}>
        <div onClick={toggleModal} className={"toggle"}>
          Close
        </div>
        <h2>Hello world</h2>
      </MyModal>
    </div>
  );
};

export default App;
