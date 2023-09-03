 //useState
  const [todos, setTodos] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/todos";

  const showData = async () => {
    try {
      axios.get(url).then((response) => {
        setTodos(response.data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //useEffect
  useEffect(() => {
    //its a function
    showData();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
     <ol>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
    </div>
  );
};
