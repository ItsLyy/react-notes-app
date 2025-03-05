import { useState } from "react";

export default function useInput(defaultValue = "") {
  const [input, setInput] = useState(defaultValue);
  const setInputHandler = (e) => setInput(e.target.value);

  return [input, setInputHandler];
}
