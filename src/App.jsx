import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/todos");
        const { todos } = await response.json();

        setTodos(todos);
      } catch (error) {
        console.log(error);
        throw new Error("failed to fetch the data :(");
      }
    };

    fetchData();
  }, []);

  console.log(todos?.[0]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search); // This will log the current value of the search input
  };

  return (
    <div>
      <h1>Your Todos!</h1>

      <div>
        <form>
          <input
            type="text"
            placeholder="search for a todo"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>search</button>
        </form>
      </div>

      <div>
        {todos?.map((item) => (
          <div key={item.id}>
            <ul>
              <li>{item.todo}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
