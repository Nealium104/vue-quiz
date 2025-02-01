const apiClient = {
    async getFolders(id = "") {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/folders${id && `/${id}`}`, {
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const folders = await response.json();
            return folders
        } catch (error) {
            console.error('Error fetching folders:', error)
            throw error
        }
    },

    async getQuizzes(id = ""){
        try {
           const response = await fetch(`${import.meta.env.VITE_BASE_URL}/quiz${id ? `/${id}` : 'zes'}`) 
           return await response.json();
        } catch (error) {
            console.error('Error fetching quizzes:', error)
        }
    },

    async getQuestions(id = "") {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/questions${id && `/${id}`}`, {
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const folders = await response.json();
            return folders;
        } catch (error) {
            console.error('Error fetching Questions:', error)
            throw error
        }
    }
}

export default apiClient;