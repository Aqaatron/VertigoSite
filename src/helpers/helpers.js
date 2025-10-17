export const anchorTo = (target) => {
    const doc = document.getElementById(target)
    console.log(doc)
    if (doc) {
        const yy = doc.offsetTop
        window.scrollTo({top: yy, behavior: 'smooth'})
    }
}