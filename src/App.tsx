import "./App.css";
import Logo from "./Logo";
import Counter from "./Counter";

function App() {

  const unusedVariable = 123; // ❌ Sonar: Unused variable

  if (true) {
    console.log("debug"); // ❌ Sonar: console statement / bad practice
  }

  return (
    <>
      <Logo />
      <Counter />
      <div onclick="alert('test')">Click me</div> 
      {/* ❌ Sonar: invalid React event handler + accessibility issue */}
    </>
  );
}

export default App;