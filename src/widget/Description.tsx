import React from "react";

const ClsxInfoPage = () => {
  return (
    <div className="mt-20  max-w-3xl mx-auto py-10 px-6  text-slate-100 space-y-10">
      <h1 className="text-3xl font-bold border-b  border-slate-600 pb-4">clsx Library Guide</h1>

       <section>
        <h2 className="text-2xl font-semibold mb-2">🔍 What is clsx?</h2>
        <p className="text-lg leading-relaxed">
          <span className="font-mono  bg-gray-800 px-1 py-0.5 rounded">clsx</span> is a tiny utility
          for conditionally joining classNames together — commonly used in React for cleaner UI logic.
        </p>
      </section>

       <section>
        <h2 className="text-2xl font-semibold mb-2">⚙️ Installation</h2>
        <pre className="bg-gray-900 text-sm p-4 rounded border border-slate-700 overflow-x-auto">
<code className="text-green-500">$ npm install clsx</code>{"\n"}
<code className="text-green-500">$ yarn add clsx</code>
        </pre>
      </section>

       <section>
        <h2 className="text-2xl font-semibold mb-2">🧠 How to Use</h2>
        <pre className="bg-gray-900 text-sm p-4 rounded border border-slate-700 overflow-x-auto">
<code className="text-pink-500">import</code> clsx <code className="text-pink-500">from</code> <span className="text-blue-500">clsx</span>;{"\n\n"}

<code className="text-slate-300">Example usage:</code>{"\n"}
<code>{`const buttonClass = clsx('btn', isActive && 'bg-blue-500', isDisabled && 'opacity-50');`}</code>
        </pre>
      </section>

       <section>
        <h2 className="text-2xl font-semibold mb-2">🛠️ How to Build Your Own</h2>
        <p>You can create a simple version like this:</p>
        <pre className="bg-gray-900 text-sm p-4 rounded border border-slate-700 overflow-x-auto">
<code>{`function myClsx(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Example:
myClsx('btn', false && 'hidden', true && 'bg-red-500');
// Output: "btn bg-red-500"
`}</code>
        </pre>
      </section>
    </div>
  );
};

export default ClsxInfoPage;
