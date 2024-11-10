import ListCharacters from "./components/ListCharacters";
import back from "./assets/bg.webp";
function App() {
  return (
    <div style={{ backgroundImage: `url(${back})` }}>
      <ListCharacters />
    </div>
  );
}

export default App;
