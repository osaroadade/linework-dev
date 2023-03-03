const axios = require("axios")

module.exports = async () => {
    try {
        const response = await axios.get("https://blog.linework.online/wp-json/wp/v2/posts?per_page=2")

        return response.data
    } catch (error) {
        console.log(error)
    }
}