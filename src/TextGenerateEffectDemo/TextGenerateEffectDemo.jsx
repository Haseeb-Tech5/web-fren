import React from "react";
import TextGenerateEffect from "./TextGenerateEffect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;

function TextGenerateEffectDemo() {
  return (
    <div className="bg-[black] h-[100vh] ">
      <TextGenerateEffect words={words} />
    </div>
  );
}

export default TextGenerateEffectDemo;
