export default {
  async getQuiz(id) {
    if (!id) {
      return "Quiz id is required";
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/quizzes/${id}`,
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
      const quizData = await response.json();
      return quizData;
    } catch (error) {
      console.error("Error fetching Questions:", error);
      throw error;
    }
  },
};
