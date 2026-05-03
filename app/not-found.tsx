import { Button } from "@/components/atoms/Button";


export default function NotFound() {
  return (
    <div className="container mx-auto px-6 py-32 text-center">
      <h1 className="text-9xl font-plusJakarta font-extrabold text-neutral-200 dark:text-neutral-800 mb-8">404</h1>
      <h2 className="text-4xl font-plusJakarta font-bold mb-6">Page not found</h2>
      <p className="text-neutral-500 mb-12 max-w-md mx-auto">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button href="/">Return Home</Button>
    </div>
  );
}
