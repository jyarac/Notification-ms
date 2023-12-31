import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
    const MONGO_URI = <string>process.env.MONGO_URI;
    await connect(MONGO_URI);
    console.log("Db connected!");
}
export default  dbConnect;