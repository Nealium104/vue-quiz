export default {
  async getQuestions(quizId) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/questions?quiz_id=${quizId}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const questions = await response.json();
      return questions;
    } catch (error) {
      console.error("Error fetching Questions:", error);
      throw error;
    }
  },
};
