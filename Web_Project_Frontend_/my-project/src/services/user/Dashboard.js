import axios from "axios"
import { authToken } from "../GetCookieValues";

const BACKEND_URL = "http://localhost:3213";

export const getTop10MoviesForUserDashboard = async () => {
  const config = {
      headers: {
          Authorization: `Bearer ${authToken}`,
      },
  };

  try {
      const moviesResponse = await axios.get(BACKEND_URL + "/movies", config);
      console.log(moviesResponse.data.movies);

      return moviesResponse.data.movies; // Use the direct movie data with `movieCoverPhoto` as a URL
  } catch (error) {
      console.error("Error fetching top movies:", error);
      return [];
  }
};
