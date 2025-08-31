import './App.css'
import Illustration from "./components/Illustration.jsx";
import AdvantageList from "./components/AdvantageList.jsx";
import TextInput from "./components/TextInput.jsx";
import Button from "./components/Button.jsx";

function App() {

  return (
      <main className="h-screen">
          <section className="card">
            <Illustration />
          </section>
          <section className="flex flex-col justify-center gap-10 px-[24px] py-10">
              <div className="flex flex-col gap-6">
                <h1 className="text-preset-1">Stay updated!</h1>
                  <p className="text-preset-2-regular">Join 60,000+ product managers receiving monthly updates on:</p>
                  <AdvantageList />
              </div>
              <form action="" className="flex flex-col gap-6">
                  <TextInput name="email" label="Email address" placeholder="email@company.com"  />
                  <Button text='Subscribe to monthly newsletter' variant='primary'/>
              </form>
          </section>
      </main>
  )
}

export default App
