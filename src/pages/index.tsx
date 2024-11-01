import { useState } from "react";

export default function Home() {
  const [char, setChar] = useState<string>("");

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    setChar(value);
  }

  return (
    <div className="flex justify-center items-center min-h-screen text-4xl">
      <div className="flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Ketik apapun disini"
          className="px-3 py-2 border border-black rounded-xl mb-6"
          onChange={changeHandler}
        />
        <div>Kamu mengetik: {char}</div>
      </div>
    </div>
  );
}


