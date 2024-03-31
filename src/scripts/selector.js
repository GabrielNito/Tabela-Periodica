export function selector() {
    const select = document.querySelector("#options");

    select?.addEventListener("change", () => {
        highlightType(select?.value)
    });

    function highlightType(type) {
        document.querySelectorAll(".element_background").forEach(element => {
            element.style.height = "10%"
        })
        const elements = document.querySelectorAll(`.${type}`)

        elements.forEach(element => {
            element.style.height = "100%"
        })
    }
}