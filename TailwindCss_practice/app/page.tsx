import Image from "next/image";

export default function Home() {
  return (
    <>
    <h1 className="bg-green-600 text-white border-4 border-vuejs p-4">
      <p className="text-xs lg:text-3x">Hello long sentence</p>
    </h1>
    <p className="text-2xl break-all">A bigger paragraph</p>
    <p className="text-base line-through">A regular text base</p>
    <p className="text-sm underline decoration-red-500 decoration-wavy decoration-1 underline-offset-3 capitalize">A description paragraph</p>
    <p className="bg-[#bada55] text-xs">Hiiii there!</p>
    <div className="flex flex-col mt-5 text-center min-h space-y-4">
      <div className="w-1/2 bg-red-500 min-h-min">Haha</div>
      <div className="w-1/2 h-16 bg-green-500">Haha</div>
    </div>
    </>
  )
}