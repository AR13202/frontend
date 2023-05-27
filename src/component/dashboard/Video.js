import axios from 'axios';
import React, {useState} from 'react';
const websiteUrl = 'https://wave-meeting.onrender.com/';
const Video = (props) => {
  const [showIframe, setShowIframe] = useState(false);
  const name = props.first + " " + props.last;
  const id = props.user_id;
  const openIframe = async () => {
    try{
      await axios.post(`http://localhost:8080/meetings`, {id,name});
      setShowIframe(true);
    }catch(err){
      console.log(err);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', overflowY: 'hidden' }}>
      {showIframe ? (
        <div style={{ width: '100%', height: '100%', border: 'none' }}>
          <iframe
            src={websiteUrl}
            title="Wave Meetings"
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="microphone; camera; display-capture"
          />
        </div>
      ) : (
        <div className='video-btn'>
        <button onClick={openIframe}>Start a Video Call</button>
        </div>
      )}
    </div>
  );
};

export default Video;
