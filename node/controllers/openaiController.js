const openai = require("../config/openaiConfig");

const generateAnswer = async (question) => {
    console.log(question);
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: question}],
        max_tokens: 100,
      }); 
      console.log(completion.data.choices[0].message);
}

module.exports = {generateAnswer};