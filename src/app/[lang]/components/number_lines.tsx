function NumberLines() {

  const numbers = Array.from({ length: 25 }, (_, index) => index + 1);

  return (
    <div className="flex flex-col h-full bg-slate-900 pt-1 border border-gray-800">
      {numbers.map((n) => (
        <span key={n} className="flex flex-col items-end justify-center text-sm text-gray-600 px-5">
          {n}
        </span>
      ))}
    </div>
  );
}

export default NumberLines;