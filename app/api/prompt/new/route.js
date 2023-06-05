import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const { prompt, tag, userId } = await req.json();
  try {
    await connectToDB();
    await Prompt.create({
      creator: userId,
      prompt,
      tag,
    });
    // await newPrompt.save();
    return new Response(
      JSON.stringify({
        creator: userId,
        prompt,
        tag,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.log("ERROR 2500", error);
    return new Response("Creation Failed", { status: 500 });
  }
};
