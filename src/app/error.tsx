'use client';

export interface ErrorProps {
  error: string;
  reset: string;
}

export default function pageError({error, reset}: ErrorProps) {
  return (
    <div>
      <h1>
        Error is coming{error},{reset}
      </h1>
    </div>
  );
}
