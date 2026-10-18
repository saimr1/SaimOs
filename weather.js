import axios from "axios";

const we = async () => {
  try {
    const we = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=32.93&longitude=73.73&current=temperature_2m&temperature_unit=celsius",
    
    );

    return we.data; 
  } catch (e) {
    // console.error("Error in my Weather api", e.response?.data || e.message);
    return null; 
  }
};

export default we;