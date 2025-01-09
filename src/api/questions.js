export default {
  async getQuestions() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/questions`,
        {
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const folders = await response.json();
      return folders;
    } catch (error) {
      console.error("Error fetching Questions:", error);
      throw error;
    }
  },
};
