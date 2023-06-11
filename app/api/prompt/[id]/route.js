import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

//  GET
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) return new Response("Not found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed", { status: 500 });
  }
};

// PATCH

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  console.log("params", params);
  try {
    await connectToDB();

    const eprompt = await Prompt.findById(params.id);

    if (!eprompt) return new Response("Not found", { status: 404 });

    eprompt.prompt = prompt;
    eprompt.tag = tag;

    await eprompt.save();

    return new Response(JSON.stringify(eprompt), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed", { status: 500 });
  }
};
// DELETE

export const DELETE = async (request, { params }) => {
  console.log("delet hit");
  try {
    await connectToDB();

    const eprompt = await Prompt.findByIdAndRemove(params.id);

    return new Response(JSON.stringify(eprompt), { status: 200 });
  } catch (error) {
    return new Response("Failed", { status: 500 });
  }
};
