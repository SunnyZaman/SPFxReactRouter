import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation, Prompt } from "react-router-dom";

export default function About() {
  const [name, setName] = useState("");
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    console.log("History: ", history);
  }, [history]);
  useEffect(() => {
    console.log("React router location: ", location);
  }, [location]);
  return (
    <div>
      <Prompt
        when={!!name}
        message={location => `Are you sure you want to go to ${location.pathname}`}
        beforeUnload={true}
      />
      <div>
        <h1>The About</h1>
        <div>What's your name?</div>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>
    </div>
  );
}