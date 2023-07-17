const initState = { user: { image: "", email: "", name: "", role: "", tax:"",  address:"", phone:"" } };

const userReducer = (state = initState, action) => {
  if (action.type === "SET_USER_INFORMATION") {
    return {
      ...state,
      user: action.payload,
    };
  }
  return state; // Thêm dòng này để trả về state ban đầu nếu không có action nào khớp
};

export default userReducer;