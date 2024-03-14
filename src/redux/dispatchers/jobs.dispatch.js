import axios from "axios";
import { BASE_URL } from "../../constants/config";

export const getAllJobs = () => async (dispatch) => {
  console.log("getAllJobs");
  try {
    dispatch({
      type: "allJobsRequest",
    });
    const { data } = await axios.get(`${BASE_URL}/api/job/getAllJob`);
    dispatch({
      type: "allJobsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "allJobsFailure",
      payload: error,
    });
    console.log(error, "error");
  }
};
