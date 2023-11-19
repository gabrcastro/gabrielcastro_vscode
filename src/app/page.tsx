export default function Page({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-colum w-full h-full items-start justify-start">
      {children}
    </main>
  )
}