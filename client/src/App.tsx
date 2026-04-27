import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="flex h-screen items-center justify-center">
      <button
        className="cursor-pointer rounded border border-blue-300 bg-gray-200 px-4 py-2 outline-0 focus:shadow-[0_0_0_3px] focus:shadow-blue-300/50"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </section>
  );
}

export default App;
