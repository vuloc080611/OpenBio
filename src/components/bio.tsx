export default function Bio({ text }: { text: string }) {
  return (
    <p className="mt-2 text-gray-600 dark:text-gray-300 text-center max-w-sm mx-auto">
      {text}
    </p>
  );
}
