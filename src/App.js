import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  //Destructure props from useFetch custom hook
  const {loading, data} = useFetch();
  return <h2>pagination starter</h2>;
}

export default App;
