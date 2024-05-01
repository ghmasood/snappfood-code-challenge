const ENV = {
  MODE: import.meta.env.PROD ? 'PRODUCTION' : 'DEVELOPMENT',
  BASE_URL: import.meta.env.VITE_API_BASE_URL,
};

export default ENV;
