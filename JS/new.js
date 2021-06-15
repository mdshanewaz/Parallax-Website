const translate = document.querySelectorAll(".translate");
        const big_title = document.querySelector("#text");
        const header = document.querySelector("header");
        const shadow = document.querySelector(".shadow");
        const contain_in_sect2 = document.querySelector("#contain_in_sect2");
        const sect2 = document.querySelector("#sect2");
        const img_contain = document.querySelector("#img_contain");
        const opacity = document.querySelectorAll(".opacity");
        const border = document.querySelector(".border");

        let header_height = header.offsetHeight;
        let section_height = sect2.offsetHeight;

        window.addEventListener("scroll", () => {
            let scroll = window.pageYOffset;
            let sectionY = sect2.getBoundingClientRect();


            translate.forEach(Element => {
                let speed = Element.dataset.speed;
                Element.style.transform = `translateY(${scroll * speed}px)`; 
            });


            opacity.forEach(Element => {
                Element.style.opacity = scroll / (sectionY.top + section_height);
            })


            big_title.style.opacity = - scroll / (header_height / 2) + 1;
            shadow.style.height = `${scroll * 0.5 + 300}px`;

            contain_in_sect2.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
            img_contain.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

            border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
         })