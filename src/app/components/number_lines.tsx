function NumberLines() {

  const numbers = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className="flex flex-col w-16 h-full bg-slate-900 pt-1">
      {numbers.map((n) => (
        <span key={n} className="flex flex-col items-end justify-center text-sm text-gray-600 pr-5">
          {n}
        </span>
      ))}
    </div>
  );
}

export default NumberLines;