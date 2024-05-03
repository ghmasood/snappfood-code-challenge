import { useEffect, useRef, useState } from 'react';

type GeoLocation = {
  loading: boolean;
  lat: number | null;
  long: number | null;
  error: GeolocationPositionError | null;
};

function useLocation(options: PositionOptions = {}) {
  const [geoData, setGeoData] = useState<GeoLocation>({
    loading: true,
    lat: null,
    long: null,
    error: null,
  });

  const optionsRef = useRef(options);

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
