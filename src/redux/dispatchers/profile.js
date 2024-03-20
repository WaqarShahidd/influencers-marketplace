import axios from "axios";
import { BASE_URL } from "../../constants/config";

export const getProfilebyId = (id) => async (dispatch) => {
  let token = localStorage.getItem("token");
  try {
    dispatch({
      type: "getProfileRequest",
    });
    const { data } = await axios.get(
      `${BASE_URL}/api/user/getSpecificUser?userId=${id}`,
      {
        headers: {
          Authorization: `token ${JSON.parse(token)}`,
        },
      }
    );
    dispatch({
      type: "getProfileSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getProfileFailure",
      payload: error,
    });
  }
};

export const clear = () => async (dispatch) => {
  dispatch({
    type: "clear",
  });
};
