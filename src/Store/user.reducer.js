function user(old = {}, newData) {
  if (newData.type == "LOGIN") {
    return { ...newData.payload };
  } else if (newData.type === "LOG_OUT") {
    return {};
  } else {
    return { ...old };
  }
}

export default user;
