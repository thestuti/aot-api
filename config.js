import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
if (!PORT) {
  throw new Error("ENV `PORT` is not configured.");
}

export { PORT };
