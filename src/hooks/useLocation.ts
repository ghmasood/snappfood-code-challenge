import { useEffect, useRef, useState } from 'react';

interface IGeoLocation {
  loading: boolean;
  lat: number | null;
  long: number | null;
  error: GeolocationPositionError | null;
}

function useLocation(options: PositionOptions = {}) {
  //STATES
  const [geoData, setGeoData] = useState<IGeoLocation>({
    loading: true,
    lat: null,
    long: null,
    error: null,
  });

  //REFS
  const optionsRef = useRef(options);

  //LIFE CYCLE HOOKS
  useEffect(() => {
    const onEvent: PositionCallback = ({ coords }) => {
      setGeoData({
        error: null,
        loading: false,
        lat: coords.latitude,
        long: coords.longitude,
      });
    };

    const onEventError: PositionErrorCallback = (error) => {
      setGeoData((prev) => ({
        ...prev,
        loading: false,
        error,
      }));
    };

    navigator.geolocation.getCurrentPosition(onEvent, onEventError, optionsRef.current);

    const watchId = navigator.geolocation.watchPosition(onEvent, onEventError, optionsRef.current);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return geoData;
}

export default useLocation;
