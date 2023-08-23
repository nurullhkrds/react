import { createContext,useState ,useEffect} from "react"


export const WeatherContext=createContext();


export const WeatherProvider = ({children}) => {
    const API_KEY = 'UQYCW9TLBHREZRCMFV3LNPM3D'
    const [dataDays, setDataDays] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [])
    const [search,setSearch]=useState('batman');

    const [humudity,setHumudity]=useState(35);
    const [tempMax,setTempMax]=useState(55);
    const [tempMin,setTempMin]=useState(55);
    const [feelsLike,setFeelsLike]=useState(55);
    const [feelsLikeMax,setFeelsLikeMax]=useState(55);
    const [pressure,setPressure]=useState(55);


    

    const makeIconUrl=(iconId)=>`https://openweathermap.org/img/wn/${iconId}@2x.png`


    const getWeatherData = async(city,units='metric') =>{
        const URLe=`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${API_KEY}`;
        const URL=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`

       
       const data=await fetch(URL).then((res)=>res.json()).then((data)=>data);
       const{resolvedAddress,days}=data
       return {resolvedAddress,days};

       
        /*
        const {
            weather,
            main:{temp,feels_like,temp_min,temp_max,pressure,humidity},
            wind:{speed},
            sys:{country},name,
        }=data

     

        const {description,icon}=weather[0];
        return {
            description,iconURL:makeIconUrl(icon),temp,feels_like,temp_min,temp_max,pressure,humidity,speed,country,name

        }
*/

        


    };

    useEffect(()=>{
        const fetchData=async()=>{
        const data=await getWeatherData(search);
        console.log(data)
        setDataDays(data)   
        localStorage.setItem('data', JSON.stringify(dataDays))
        }   

        

        fetchData();
        
      },[search])
      

    
  
  
    

    


    const sharedValuesAndMethods=[
        dataDays,pressure,setPressure,feelsLikeMax,setFeelsLikeMax,feelsLike,setFeelsLike,tempMin,setTempMin,
        tempMax,setTempMax,humudity,setHumudity,search,setSearch
    ]



    return (
        <WeatherContext.Provider value={sharedValuesAndMethods}>{children}</WeatherContext.Provider>
    )


}


 

