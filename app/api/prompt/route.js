import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const prompt = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed", { status: 500 });
  }
};
