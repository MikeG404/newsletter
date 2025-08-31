import './App.css'
import Illustration from "./components/Illustration.jsx";
import AdvantageList from "./components/AdvantageList.jsx";

function App() {

  return (
      <main className="h-screen">
          <section className="card">
            <Illustration />
          </section>
          <section className="text-content">
            <h1>Stay updated</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <AdvantageList />
          </section>
      </main>
  )
}

export default App
