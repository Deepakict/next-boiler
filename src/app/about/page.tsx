interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function About() {
  const data = await getData()

  return (
    <div>
      {data.length > 0 ? (
        data.map((item:Todo) => <p key={item.id}>{item.title}</p>)
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default About;