import { AzureKeyCredential, OpenAIClient } from "@azure/openai";

const END_POINT = "https://insta-caption-generator-service.openai.azure.com/";
const API_KEY = "6754a684befa4eac908b26af134b0c69";
const deploymentId = "InstaCaptionGPT";

export async function fetchCaptions(
  description: string,
  mood: string,
  language: string,
) {
  const input = {
    description,
    mood,
    language,
    count: 5,
  };
  const jsonString = JSON.stringify(input);
  const client = new OpenAIClient(END_POINT, new AzureKeyCredential(API_KEY));
  const result = await client.getChatCompletions(deploymentId, [
    {
      role: "system",
      content:
        'You are an ai assistant which provides the users with captions based on user description,mood,language.\nThe input will be in form of json containing description,mood,language and count of captions to be generated.Output the captions in json format with tags separate from caption. \nExample\n{\ncaptions:[{\ncaption:"Sun of a beach",\ntags:["BeachLife","Sunset"],\n}]\n}',
    },
    { role: "user", content: jsonString },
  ]);
  return result.choices[0].message;
}
