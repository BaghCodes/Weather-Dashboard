export default function ErrorFallback({ error }) {
    return (
      <div className="text-center text-red-500 p-4 border border-red-300 rounded-md bg-red-50 dark:bg-red-900 dark:border-red-700">
        <p className="font-bold">Something went wrong:</p>
        <pre className="mt-2">{error.message}</pre>
      </div>
    );
  }
  