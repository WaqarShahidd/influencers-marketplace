import axios from "axios";
import { BASE_URL } from "../../constants/config";

export const getAllPitches = () => async (dispatch) => {
  console.log("getAllPitches");
  try {
    dispatch({
      type: "allPitchRequest",
    });
    const { data } = await axios.get(`${BASE_URL}/api/pitch/getAllPitch`);
    dispatch({
      type: "allPitchSuccess",
      payload: data,
    });
    console.log(data, "Pitch");
  } catch (error) {
    dispatch({
      type: "allPitchFailure",
      payload: error,
    });
    console.log(error, "error");
  }
};
