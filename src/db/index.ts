import { connect } from "mongoose";

const db = () => {
  const connectionUrl =
    "mongodb+srv://ashrafabusunaina1986:rf6QCSKvLNZI0AhW@cluster0.h2ko2kp.mongodb.net/";
  connect(connectionUrl)
    .then(() => console.log("created connected mongo database successfull"))
    .catch((error) => console.log(error));
};
export default db;
