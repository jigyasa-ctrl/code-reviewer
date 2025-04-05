import { ChatOllama } from "@langchain/ollama";

const llm = new ChatOllama({
    model: "codellama:7b",
    temperature: 0  // Default value.
  });

const prompt  = "You are an expert senior frontend engineer, review the code breifly"

  async function generateReview(code) {
    const result = await llm.invoke([
        ["system", prompt],
        ["human", code]]);
        return result.content
}
export default generateReview;