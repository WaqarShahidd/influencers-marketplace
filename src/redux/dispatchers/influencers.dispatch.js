import axios from "axios";
import { BASE_URL } from "../../constants/config";

export const getAllInfluencers = () => async (dispatch) => {
  console.log("getAllInfluencers");
  try {
    dispatch({
      type: "allInfluencersRequest",
    });
    const { data } = await axios.get(
      `${BASE_URL}/api/user/getUserByRole?role=influencer`
    );
    dispatch({
      type: "allInfluencersSuccess",
      payload: data,
    });
    console.log(data, "data");
  } catch (error) {
    dispatch({
      type: "allInfluencersFailure",
      payload: error,
    });
    console.log(error, "error");
  }
};
