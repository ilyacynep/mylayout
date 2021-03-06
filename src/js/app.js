import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
document.addEventListener("DOMContentLoaded", function () {
    var blist_item = document.querySelectorAll(".blist-item");
    var footer_link = document.querySelectorAll(".footer-link");
    var footer_link = document.querySelectorAll(".footer-link");
    var burger = document.querySelector(".burger-icon");
    var hero_col_image = document.querySelector(".hero-col-image");
    var hero_title_col = document.querySelector(".hero-title-col");
    var burger_menu = document.querySelector(".burger");
    burger.addEventListener("click", (e) => {
        burger_menu.classList.add("--active");
        burger.style.display = "none";
        var width = window.innerWidth;
        if (width > 700) {
            hero_col_image.style.display = "none";
        }
        checkwidth();
        hero_title_col.classList.add("burger-active");
    })
    var header_back = document.querySelector(".header-back");
    header_back.addEventListener("click", (e) => {
        close_burger();
    })

    function close_burger() {
        burger_menu.classList.remove("--active");
        burger.style.display = "block";
        hero_title_col.classList.remove("burger-active");
        checkwidth();
        var width = window.innerWidth;
        if (width > 700) {
            hero_col_image.style.display = "block";
        }
        document.querySelector(".hero-title-col").style.left = document.querySelector(".first-item").offsetLeft + "px";
    }
    var footer_btn = document.querySelector(".footer-btn");
    footer_btn.addEventListener("click", (e) => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
    var hero_btn = document.querySelector(".hero-btn");
    var advantages = document.querySelector(".advantages").scrollHeight;
    const gotoblock_advantages = document.querySelector(".advantages");
    const gotoblockvalue_advantages = gotoblock_advantages.getBoundingClientRect().top + scrollY - document.querySelector('.advantages').offsetHeight;
    const gotoblock_about = document.querySelector(".about");
    const gotoblockvalue_about = gotoblock_about.getBoundingClientRect().top + scrollY - document.querySelector('.about').offsetHeight;
    const gotoblock_faq = document.querySelector(".faq");
    const gotoblockvalue_faq = gotoblock_faq.getBoundingClientRect().top + scrollY - document.querySelector('.faq').offsetHeight;
    const gotoblock_feedback = document.querySelector(".feedback");
    const gotoblockvalue_feedback = gotoblock_feedback.getBoundingClientRect().top + scrollY - document.querySelector('.feedback').offsetHeight;
    const gotoblock_hero = document.querySelector(".hero");
    const gotoblockvalue_hero = gotoblock_hero.getBoundingClientRect().top + scrollY - document.querySelector('.hero').offsetHeight;
    const gotoblock_price = document.querySelector(".price");
    const gotoblockvalue_price = gotoblock_price.getBoundingClientRect().top + scrollY - document.querySelector('.price').offsetHeight;
    const gotoblock_reviews = document.querySelector(".reviews");
    const gotoblockvalue_reviews = gotoblock_reviews.getBoundingClientRect().top + scrollY - document.querySelector('.reviews').offsetHeight;
    footer_link.forEach((el, index) => {
        el.addEventListener("click", (e) => {
            burger_menu.classList.remove("--active");
            burger.style.display = "block";
            burger_menu.style.position = "absolute";
            var current = e.currentTarget;
            footer_link.forEach(el => {
                el.classList.remove("active");
            })
            current.classList.add("active");
            if (index == 0) {
                gotoblock_hero.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 1) {
                gotoblock_about.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 2) {
                gotoblock_advantages.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 3) {
                gotoblock_price.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 4) {
                gotoblock_reviews.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 5) {
                gotoblock_faq.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 6) {
                gotoblock_feedback.scrollIntoView({
                    duration: 2000
                })
            }
        })
    })
    blist_item.forEach((el, index) => {
        el.addEventListener("click", (e) => {
            burger_menu.classList.remove("--active");
            burger.style.display = "block";
            burger_menu.style.position = "absolute";
            var current = e.currentTarget;
            blist_item.forEach(el => {
                el.classList.remove("--active");
            })
            current.classList.add("--active");
            if (index == 0) {
                gotoblock_hero.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 1) {
                gotoblock_about.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 2) {
                gotoblock_advantages.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 3) {
                gotoblock_price.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 4) {
                gotoblock_reviews.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 5) {
                gotoblock_faq.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 6) {
                gotoblock_feedback.scrollIntoView({
                    duration: 2000
                })
            }
        })
    })
    hero_btn.addEventListener("click", function () {

        gotoblock_about.scrollIntoView({
            behavior: "smooth"
        })
    });
    if (!hero_title_col.classList.contains("burger-active")) {
        document.querySelector(".hero-title-col").style.left = document.querySelector(".first-item").offsetLeft + "px";
        window.onresize = function (event) {
            if (!hero_title_col.classList.contains("burger-active")) {
                document.querySelector(".hero-title-col").style.left = document.querySelector(".first-item").offsetLeft + "px";
            } else {
                checkwidth();
            }
        };
    }

    function scroll(value) {
        close_burger();
        var t = value;
        value.scrollIntoView({
            behavior: "smooth"
        })
    }

    function checkwidth() {
        var width = window.innerWidth;
        if (width > 700) {
            if (width < 1114) {
                hero_title_col.style.left = "35%";
            }
            if (width < 800) {
                hero_title_col.style.left = "45%";
            }
            if (width < 768) {
                hero_title_col.style.left = "47%";
            }
        }
        if (width > 1114) {
            hero_title_col.classList.remove("burger-active");
            burger_menu.classList.remove("--active");
            burger.style.display = "block";
            hero_col_image.style.display = "block";
        }
    }
})