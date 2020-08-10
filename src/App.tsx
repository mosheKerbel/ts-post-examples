import React, { useState } from "react";
import Table from "./Table";

import "./App.css";

type Candidate = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
};

const cols: Array<keyof Candidate> = ["firstName", "lastName", "age"];

const candidatesList: Array<Candidate> = [
  { id: "3", firstName: "Dan", lastName: "Gilbert", age: 32 },
  { id: "2", firstName: "Olivia", lastName: "Smith", age: 35 },
  { id: "1", firstName: "Emma", lastName: "Miller", age: 30 },
];

const onRowClick = (row: Candidate) =>
  console.log(`The selected candidate is ${row.firstName} ${row.lastName}`);

const App = () => {
  const [candidates, setCandidates] = useState(candidatesList);
  const onSortClick = (col: keyof Candidate) => {
    const sort = (candidateA: Candidate, candidateB: Candidate) =>
      candidateA[col] < candidateB[col] ? -1 : 1;
    setCandidates([...candidates].sort(sort));
  };

  return (
    <Table<Candidate>
      rows={candidates}
      cols={cols}
      onRowClick={onRowClick}
      onSortClick={onSortClick}
    />
  );
};

export default App;
