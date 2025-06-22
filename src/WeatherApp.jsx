 import {useState} from "react";
 import SearchBox from "./SearchBox";
 import InfoBox from "./InfoBox";
 import "./App.css";

// export default function WeatherApp() {
//     const [weatherInfo,setWeatherInfo]=useState({
        
//         city:"Delhi",
//         feelsLike:25,
//         temp:34,
//         tempMin:24,
//         tempMax:34,
//         humidity:47,
//         weather:"haze",
    
//     });

//     let updateInfo=(newInfo) =>{
//         setWeatherInfo(newInfo);
//     };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: "20px",         // space between items
//         paddingTop: "20px",  // padding from top for heading
//         width: "100%",       // full width container
//       }}
//     >
//       <h2>Weather App by Ash</h2>
//       <SearchBox updateInfo={updateInfo} />
//       <InfoBox info ={weatherInfo}/>
//     </div>
//   );
// }

// export default function WeatherApp() {
//   const [weatherInfo,setWeatherInfo] = useState({
//     city:"Delhi",
//     feelsLike:25,
//     temp:34,
//     tempMin:24,
//     tempMax:34,
//     humidity:47,
//     weather:"haze",
//   });

//   let updateInfo=(newInfo) =>{
//     setWeatherInfo(newInfo);
//   };

//   return (
//     <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
//       <div className="app-background"></div> {/* Background GIF */}

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: "20px",
//           paddingTop: "20px",
//           width: "100%",
//           position: "relative",
//           zIndex: 1,  // Make sure content is above background
//           color: "white",
//           textShadow: "1px 1px 4px black",
//         }}
//       >
//         <h2>Weather App by Ash</h2>
//         <SearchBox updateInfo={updateInfo} />
//         <InfoBox info={weatherInfo} />
//       </div>
//     </div>
//   );
// }


export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 25,
    temp: 34,
    tempMin: 24,
    tempMax: 34,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <div className="app-background"></div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          paddingTop: "20px",
          width: "100%",
          position: "relative",
          zIndex: 1,
          color: "white",
          textShadow: "1px 1px 4px black",
        }}
      >
        <h2>Weather App by Ash</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}

