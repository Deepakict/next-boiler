async function delay() {
  await new Promise<void>(resolve => {
    setTimeout(resolve, 3000);
  });
}

export default async function Profile() {
  await delay();
  return (
    <div>
      <h1>thisProfile</h1>
    </div>
  );
}
