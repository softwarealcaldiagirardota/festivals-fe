import { useEffect } from "react";
import { useHeader } from "../../context/header-context";

const JudgeVotes = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Soy Juez");
  }, []);

  return (
    <>
      <h1>Soy Juez</h1>
    </>
  );
};

export default JudgeVotes;
