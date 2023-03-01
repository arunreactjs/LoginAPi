import ApiManager from "./apiManager";

const userLogin = async (values) => {
  try {
    const result = await ApiManager('/authaccount/login', {
      method: 'POST',
      headers: {
        'content-type':'application/json', 
      },
      data: data,
    });
    return result;
  } 
  catch (error) {
    return error.response.data;
  }
};

export default userLogin




