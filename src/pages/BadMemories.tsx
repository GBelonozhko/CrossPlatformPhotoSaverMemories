import React, { useContext } from "react";
import MemoriesContext from "../data/memories-context";
import MemoriesContent from "../components/MemoriesContent";

const BadMemories: React.FC = () => {
  const memoriesCtx = useContext(MemoriesContext);

  const badMemories = memoriesCtx.memories.filter(
    (memory) => memory.type === "bad"
  );

  return (
    <MemoriesContent
      title='Bad Memories'
      fallbackText='No Bad Memories Must Be Nice.'
      memories={badMemories}
    />
  );
};

export default BadMemories;
