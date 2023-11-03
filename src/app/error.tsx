'use client';
export default function pageError({error, reset}: any) {
  return (
    <div>
      <h1>
        Error is coming{error},{reset}c
      </h1>
    </div>
  );
}
