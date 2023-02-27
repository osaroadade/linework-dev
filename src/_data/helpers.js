module.exports = {
    getLinkActiveState(itemUrl, pageUrl) {
        let response = ""

        if (itemUrl === pageUrl) {
            response = ' aria-current="page"'
        }

        if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
            response += ' data-state="active"'
        }

        return response;
    },

    addPageSpecificCode(url) {
        const script = `<script src="${url}" defer></script>`

        return script
    }
}