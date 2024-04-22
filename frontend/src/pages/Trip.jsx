import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocation} from '../api/app'; // replace with actual path
import './trip.css';

const Trip = () => {
  const navigate=useNavigate()
  const [location, setLocation] = useState(''); // Update initial state
  const [duration, setDuration] = useState('day');

  const handleSubmit = async(event) => {
    event.preventDefault();
    const {lat,lng}=await getLocation(location);
    console.log('Location:', location, 'Duration:', duration, 'Lat:', lat, 'Lng:', lng)
    navigate(`/Trip/${lat}/${lng}/${duration}`)
  };

  const handleChange = (event) => {
    const {value} = event.target;
    setLocation(value);
  };

  return (
    <div className="trip-page-wrapper">
      <div className="page-container">
        <form onSubmit={handleSubmit}>
          <label1>
            Enter Location:
            <input type="text" name="loc" value={location} onChange={handleChange} placeholder=" Search" /><br /> {/* Update value to loc */}
          </label1>
          <label2>
            Duration:
            <select name="duration" value={duration} onChange={(e) => setDuration(e.target.value)}>
              <option value="day">1 day</option>
              <option value="week">1 week</option>
            </select>
          </label2><br />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      </div>
  );
};

export default Trip;