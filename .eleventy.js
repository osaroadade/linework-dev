module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/images")
    eleventyConfig.addPassthroughCopy("./src/js")
    eleventyConfig.addPassthroughCopy("./src/css")

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "public",
        }
    }
}