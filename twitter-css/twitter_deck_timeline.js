function ready() {
    let intId
    intId = setInterval(() => {
        const targetNode = document.getElementsByClassName('column')
        if (!targetNode || targetNode.length === 0) return

        try {
            targetNode[0].style.display = 'block'
            targetNode[0].style.width = '50%'
            targetNode[0].style.margin = '0 auto'
        } catch (err) {
            console.error('Setting style for container failed', err)
        } finally {
            clearInterval(intId)
        }
    }, 500)
}

document.addEventListener("DOMContentLoaded", ready);
