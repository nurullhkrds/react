import axios from 'axios';

const searchObj=async(temp)=>{
    const response=await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID WuGkivqxd8CKxanhG5CUJD_6Ese8CzoAdhIsBPA9c90',
      },
      params:{
          query:temp,
      },
    })
    return response.data.results;
 
  };
  export default searchObj;