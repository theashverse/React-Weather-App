// import "./App.css";
// import WeatherApp from "./WeatherApp";

// function App(){
//   return (
//     <div className="AppContainer">
//       <div className="app-background"></div>

//         <WeatherApp/>
//     </div>
//   );
// }

// export default App;


import WeatherApp from './WeatherApp';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url('https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dGV4d2NhMWF0MHJ2bjR0d255a2Nka3VkMzUwampjdmZycTA5cmFyNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/U3COk89TYMxwbPUCje/giphy.gif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '130%',
        overflow: 'hidden',
      }}
    >
      <WeatherApp />
    </div>
  );
}

export default App;
