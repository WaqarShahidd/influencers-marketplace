import axios from "axios";
import { BASE_URL } from "../../constants/config";

export const getAllNewsByCategory =
  (category = "") =>
  async (dispatch) => {
    console.log("getAllNewsByCategory", category);
    try {
      dispatch({
        type: "allNewsCatRequest",
      });
      const { data } = await axios.get(
        `${BASE_URL}/api/news/getAllNewsByCategory?category=${category}`
      );
      dispatch({
        type: "allNewsCatSuccess",
        payload: data,
      });
      console.log(data, "news by category");
    } catch (error) {
      dispatch({
        type: "allNewsCatFailure",
        payload: error,
      });
      console.log(error, "error");
    }
  };

export const getAllNews = () => async (dispatch) => {
  console.log("getAllNews");
  try {
    dispatch({
      type: "allNewsRequest",
    });
    const { data } = await axios.get(`${BASE_URL}/api/news/getAllNews`);
    dispatch({
      type: "allNewsSuccess",
      payload: data,
    });
    console.log(data, "news");
  } catch (error) {
    dispatch({
      type: "allNewsFailure",
      payload: error,
    });
    console.log(error, "error");
  }
};
