// MapComponent.js

import React from 'react';

export const MapComponent = () => {
  return (
    <iframe
      width="600"
      height="450"
      style={{ border: 0, marginTop:15 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/place/J.P.+Tech+Institute+-+Best+Computer+Institute%2FBest+Tally+Institute%2FO+Level%2FFull+Stack+Development%2FHardware+%26+Networking/@28.8215256,78.7831742,15z/data=!4m6!3m5!1s0x390afbb02256b2c3:0x735c8a566007b885!8m2!3d28.8215256!4d78.7831742!16s%2Fg%2F11ckvwvkm1?entry=ttu`}
      title="Map"
    ></iframe>
  );
};


