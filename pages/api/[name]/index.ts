// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {

//   res.status(200);
// }

////ВАЖНО ВАЖНО ВАЖНО /////// ПРИ GET НА USER КОЙТО НЕ Е ПРОФИЛА НА ЛОГНАТИЯ ПОТРЕБИТЕЛ НЕ ТРЯБВА ДА ВРЪЩАМЕ СЪШИЯ LAYOUТ ////ВАЖНО ВАЖНО ВАЖНО ///////
export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query;

  console.log(name);

  res.end();
}
