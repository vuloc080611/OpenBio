import Image from "next/image";

export default function Avatar({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
        <Image
          src={src}
          alt={name}
          width={96}
          height={96}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
        {name}
      </h1>
    </div>
  );
}
