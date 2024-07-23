import { useEffect } from "react";
import { useHeader } from "../../context/header-context";

const JudgeVotes = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Soy Jurado");
  }, []);

  return (
    <>
      <h1>Soy Jurado</h1>
    </>
  );
};

export default JudgeVotes;
