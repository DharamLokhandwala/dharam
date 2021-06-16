window.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver((entries) => {
        let i = 0;
        const entriesMap = {}

        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");

            const targetElement1 = document.querySelector(
                `.table_of_contents.fixed li a[href="#${id}"]`
            );
            const targetElement2 = document.querySelector(
                `.table_of_contents.sticky li a[href="#${id}"]`
            );

            i += 1;
            if (entry.intersectionRatio > 0) {
                document.querySelectorAll(".table_of_contents.sticky li a, .table_of_contents.fixed li a").forEach(element => {
                    element.classList.remove("active");
                });

                targetElement1 && targetElement1.classList.add("active");
                targetElement2 && targetElement2.classList.add("active");
            } else {
                targetElement1 && targetElement1.classList.remove("active");
                targetElement2 && targetElement2.classList.remove("active");
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll(".content").forEach((section) => {
        observer.observe(section);
    });
});


const fab = document.querySelector('.fab');
const tableOfContents = document.querySelector(".table_of_contents.fixed")

const closeTableOfContents = () => {
    tableOfContents.classList.remove("show");
    document.querySelector(".fab_close").style.display = 'none'
    document.querySelector(".fab_show").style.display = 'revert'
    document.body.style.overflow = "auto"
}

const showTableOfContents = () => {
    tableOfContents.classList.add("show")
    document.querySelector(".fab_close").style.display = 'revert'
    document.querySelector(".fab_show").style.display = 'none'
    document.body.style.overflow = "hidden"
}

fab && fab.addEventListener("click", (e => {
    e.preventDefault()

    if (!tableOfContents) return;

    if (tableOfContents.classList.contains("show")) {
        closeTableOfContents()
    } else {
        showTableOfContents()
    }
}));

window.addEventListener("resize", () => {
    closeTableOfContents()
    // if (document.querySelector(".table_of_contents.fixed").style.display == "none") {
    //     document.body.style.overflow = "auto"
    // } else {
    //     document.body.style.overflow = "hidden"
    // }
})

// When link is clicked, close table of contents
const navLinks = document.querySelectorAll('.table_of_contents.fixed a');
console.log(navLinks)
navLinks.forEach(navLink => {
    navLink.addEventListener("click", (e) => {
        const tableOfContents = document.querySelector(".table_of_contents.fixed")
        if (!tableOfContents) return;

        closeTableOfContents();
    })
})