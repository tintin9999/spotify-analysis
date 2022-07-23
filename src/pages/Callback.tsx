import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom"

const Callback = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '') {
      return;
    }

    const returnedData = new URLSearchParams(location.hash.slice(1));
    location.state = { accessToken: returnedData.get('access_token') };
  }, [])

  return (<Navigate to='/' replace />)
}

export default Callback