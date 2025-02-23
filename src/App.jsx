import IphonesPage from "./Pages/MainApplePage/IphonesPage"
import Nav from "./Pages/Nav"
import IphoneStore from "./Pages/StorePage/IphoneStore"


function App() {


  return (
    <>
      <Nav />
      <div className="w-full h-[1000vh] overflow-hidden">
        <IphonesPage/>
        <IphoneStore/>
      </div>
    </>
  )
}

export default App
