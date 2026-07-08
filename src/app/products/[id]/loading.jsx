import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="h-[70vh] flex items-center justify-center">
      <Spinner size="lg" label="Loading Product..." />
    </div>
  );
}