export default function Footer() {
  return (
    <div className='w-full h-6 flex items-center justify-between bg-gray-900 border border-gray-800'>
      <div className="hover:cursor-not-allowed">
        <button type="button" className="bg-slate-800 px-2">
          <span className="font-light text-gray-300 text-base">English</span>
        </button>
        <button type="button" className='bg-gray-900 px-2'>
          <span className="font-light text-gray-300 text-base">Portuguese</span>
        </button>
      </div>

      <div className="hover:cursor-not-allowed">
        <button type="button" className="bg-slate-800 px-2">
          <span className="font-light text-gray-300 text-base">Dark</span>
        </button>
        <button type="button" className='bg-gray-900 px-2'>
          <span className="font-light text-gray-300 text-base">Light</span>
        </button>
      </div>
    </div>
  )
}