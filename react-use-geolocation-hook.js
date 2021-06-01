import React, { useState, useEffect } from 'react';

export interface GeolocationInterface {
  latitude: number;
  longitude: number;
}

const useGeolocation = () => {
  const [location, setLocation] = useState<GeolocationInterface>({ latitude: 0, longitude: 0 });
  const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };

  const success = (pos: GeolocationPosition) => {
    const coords = pos.coords;
    setLocation({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  const errors = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  useEffect(() => {
    if (window.navigator && window.navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((res) => {
          if (res.state === 'granted') {
            window.navigator.geolocation.getCurrentPosition(success);
          } else if (res.state === 'prompt') {
            window.navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (res.state === 'denied') {
            console.log('/!\\ Geolocation access denied /!\\');
          }
          res.onchange = () => {
            // console.log('res =>', res.state);
          };
        })
        .catch((err) => {
          console.log('Geolocation error =>', err);
        });
    } else {
      console.log('Geolocation not available');
    }
  }, []);

  return location;
};

export default useGeolocation;
