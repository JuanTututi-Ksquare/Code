import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { isValid, differenceInYears } from "date-fns";
import moment from "moment";

const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  const today = new Date();
  return res.send(today);
});

app.get("/test/:date"),
  (req: Request, res: Response) => {
    const { date } = req.params;
  };

app.get("/date/:sentDate", (req: Request, res: Response) => {
  const { sentDate } = req.params;
  const hiringDate = moment(new Date(sentDate));
  const today = moment(new Date().toISOString().split("T")[0]);
  if (hiringDate.isValid() && today.diff(hiringDate, "years", true) === 1) {
    return res.status(200).send("Email was sent succesfully!");
  } else {
    return res.status(404).send("Error!");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
