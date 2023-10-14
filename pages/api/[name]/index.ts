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
//USER модела ще има статус
//също ще има аутентикирани у-ва

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query;

  console.log(name);

  res.end();
}

//КОГАТО ПРАВЯ ЗАЯВКА ТРЯБВА ДА СЛОЖА МИДЪЛУЕЙЪР КОЙТО ЩЕ Я ФИЛТРИРА ЗА ДА НЕ ИЗПРАТЯ КУЕРИ КЪМ БАЗАТА С /notifications
//МОЖЕ И НА ФРОНТЕНДА ДА СЕ НАПРАВИ ??

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   //ip
//   console.log(req.socket.remoteAddress);
//   //Device detection
//   console.log(req.headers["user-agent"]);

//   if (req.method === "GET") {
//     // Handle GET request
//     const { name } = req.query;
//     console.log(name);
//     res.end();
//   } else if (req.method === "POST") {
//     // Handle POST request
//     const { name } = req.query;
//     console.log("post");
//     res.end();
//   } else {
//     // Handle other HTTP methods if needed
//     res.status(405).end(); // Method Not Allowed
//   }
// }
