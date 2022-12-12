import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { firstName, lastName, email, budget, message } = req.body;
    const result = await prisma.quote.create({
      data: {
        fname: firstName,
        lname: lastName,
        email: email,
        budget: budget,
        mssg: message,
      },
    });
    res.status(200).json(result);
  }
};
