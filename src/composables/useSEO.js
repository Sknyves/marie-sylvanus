import { watch } from 'vue'
import { useRoute } from 'vue-router'

export function useSEO() {
    const route = useRoute()

    const updateMetaDescription = (description) => {
        let metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute('content', description)
        }
    }

    const updateOGTags = (title, description, image = 'https://marie-sylvanus.vercel.app/banner.png') => {
        const ogTitle = document.querySelector('meta[property="og:title"]')
        const ogDescription = document.querySelector('meta[property="og:description"]')
        const ogImage = document.querySelector('meta[property="og:image"]')

        if (ogTitle) ogTitle.setAttribute('content', title)
        if (ogDescription) ogDescription.setAttribute('content', description)
        if (ogImage) ogImage.setAttribute('content', image)
    }

    const setPageSEO = (config) => {
        // Update title
        if (config.title) {
            document.title = config.title
        }

        // Update meta description
        if (config.description) {
            updateMetaDescription(config.description)
        }

        // Update Open Graph tags
        if (config.ogTitle || config.ogDescription || config.ogImage) {
            updateOGTags(
                config.ogTitle || config.title,
                config.ogDescription || config.description,
                config.ogImage
            )
        }
    }

    return {
        setPageSEO,
        updateMetaDescription,
        updateOGTags
    }
}
