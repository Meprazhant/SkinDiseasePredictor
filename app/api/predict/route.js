import formidable from "formidable";
import { IncomingForm } from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET(request) {
  return Response.json({
    message: "Hello from the GET endpoint!",
  });
}

export async function POST(request) {
  const res = await request.json();
  const form = new IncomingForm();
  form.uploadDir = "./public/uploads";
  form.keepExtensions = true;
  form.parse(request, (err, fields, files) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(files);
  });
  return Response.json({
    message: "Hello from the POST endpoint!",
  });
}
