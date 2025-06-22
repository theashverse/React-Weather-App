// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import SunnyIcon from '@mui/icons-material/Sunny';

// export default function InfoBox({ info }) {
//   // Example embed URLs (replace with your actual embed links)
//   const HOT_URL = "https://tenor.com/embed/7403472510244359912";
//   const COLD_URL = "https://tenor.com/embed/7403472510244359912";
//   const RAIN_URL = "https://tenor.com/embed/7403472510244359912";

//   let gifUrl;
//   if (info.humidity > 80) {
//     gifUrl = RAIN_URL;
//   } else if (info.temp > 15) {
//     gifUrl = HOT_URL;
//   } else {
//     gifUrl = COLD_URL;
//   }

//   return (
//     <div className="InfoBox">
//       <h1>WeatherInfo - {info.weather}</h1>
//       <Card
//         sx={{
//           maxWidth: 340,
//           height: 300,      // Fix height to suit GIF aspect ratio
//           position: 'relative',
//           overflow: 'hidden',
//           color: 'white',
//         }}
//       >
//         <CardMedia
//           component="iframe"
//           src={gifUrl}
//           title="Weather animation"
//           allowFullScreen
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             border: 'none',
//             zIndex: 0,
//           }}
//         />
//         <CardContent
//           sx={{
//             position: 'relative',
//             zIndex: 1,
//             backgroundColor: 'rgba(0, 0, 0, 0.4)', // dark transparent overlay for text readability
//             height: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//           }}
//         >
//           <Typography gutterBottom variant="h5" component="div">
//             {info.city}{" "}
//             {info.humidity > 80 ? (
//               <ThunderstormIcon />
//             ) : info.temp > 15 ? (
//               <SunnyIcon />
//             ) : (
//               <AcUnitIcon />
//             )}
//           </Typography>
//           <Typography variant="body2" component={"span"}>
//             <div>Temperature = {info.temp}&deg;C</div>
//             <p>Humidity = {info.humidity}</p>
//             <p>Min Temp = {info.tempMin}&deg;C</p>
//             <p>Max Temp = {info.tempMax}&deg;C</p>
//             <p>
//               The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
//             </p>
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }



import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
  // Correct Tenor embed URLs
  const HOT_URL = "https://tenor.com/embed/19759297";
  const COLD_URL = "https://tenor.com/embed/7403472510244359912";
  const RAIN_URL = "https://tenor.com/embed/17419263798815708073";

  let gifUrl;
  if (info.humidity > 80) {
    gifUrl = RAIN_URL;
  } else if (info.temp > 15) {
    gifUrl = HOT_URL;
  } else {
    gifUrl = COLD_URL;
  }

  return (
    <div className="InfoBox">
      <h1>WeatherInfo - {info.weather}</h1>
      <Card
        sx={{
          maxWidth: 340,
          height: 300,
          position: 'relative',
          overflow: 'hidden',
          color: 'white',
        }}
      >
        <CardMedia
          component="iframe"
          src={gifUrl}
          title="Weather animation"
          allowFullScreen
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            zIndex: 0,
          }}
        />
        <CardContent
          sx={{
            position: 'relative',
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{" "}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <SunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography variant="body2" component={"span"}>
            <div>Temperature = {info.temp}&deg;C</div>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>
              The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
