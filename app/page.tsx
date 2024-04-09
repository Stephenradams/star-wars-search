
export default function Home() {
  return (
    <>
      <h1 className="text-5xl">Welcome to the Star Wars API viewer</h1>
      <p className="pt-10">
        This is a simple app that uses the Star Wars API to display information
        about the Star Wars universe.
      </p>
      <p className="pt-5">
        You can view information about the following categories:
        <ul>
          <li>Films</li>
          <li>People</li>
          <li>Planets</li>
          <li>Species</li>
          <li>Starships</li>
          <li>Vehicles</li>
        </ul>
      </p>
    </>
  );
}
