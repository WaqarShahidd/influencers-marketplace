import axios from "axios";
import { BASE_URL } from "../../constants/config";

export const getUpcomingBirthdays = () => async (dispatch) => {
  console.log("getUpcomingBirthdays");
  try {
    dispatch({
      type: "upcomingRequest",
    });
    const { data } = await axios.get(
      `${BASE_URL}/api/user/getUpcomingBirthdays`
    );
    dispatch({
      type: "upcomingSuccess",
      payload: data,
    });
    console.log(data, "data");
  } catch (error) {
    dispatch({
      type: "upcomingFailure",
      payload: error,
    });
    console.log(error, "error");
  }
};
