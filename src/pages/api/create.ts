import type { NextApiRequest, NextApiResponse } from "next";
import { MongoDbConfig } from "../../../backend/mongo.config";
import { createTask } from "../../../backend/task.repository";


type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  console.log(req.body);
  

  await MongoDbConfig()
  await createTask({
    place: req.body.place,
    date: req.body.date,
    customer: req.body.customer,
    comments: req.body.comments
  })
  res.status(200).json({ name: "John Doe" });
}

export default handler
