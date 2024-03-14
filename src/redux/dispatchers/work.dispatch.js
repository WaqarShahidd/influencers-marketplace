import axios from "axios";
import { BASE_URL } from "../../constants/config";

export const getAllWork =
  (userId = "") =>
  async (dispatch) => {
    console.log("getAllWork");
    try {
      dispatch({
        type: "allWorkRequest",
      });
      const { data } = await axios.get(
        `${BASE_URL}/api/work/getAllWork?userId=${userId}`
      );
      dispatch({
        type: "allWorkSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "allWorkFailure",
        payload: error,
      });
      console.log(error, "error");
    }
  };
