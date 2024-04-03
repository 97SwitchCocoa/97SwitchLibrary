const TRIGGER_ATTR = "[data-control='mobile-nav']"; // the attribute to trigger open/close of the menu
const MOBILE_NAV = ".mobile-nav"; // the class name for the mobile nav
const MASK_CLASS = ".modal-mask"; // the class name for a mask

const ANIM_DURATION = 0.5;

let menuOpen = false;

document.querySelectorAll(TRIGGER_ATTR).forEach((trigger) => {
    const name = trigger.getAttribute("data-control");
    const nav = document.querySelector(`[data-name='${name}']`);
    trigger.addEventListener("click", (e) => {
        toggleModal(nav);
    });
});

document.querySelectorAll(MOBILE_NAV).forEach((el) => {
    gsap.to(el, { display: "none", x: "100%", duration: 0 });
    el.querySelectorAll(MASK_CLASS).forEach((mask) =>
        gsap.to(mask, { opacity: 0 })
    );
});

function toggleModal(modal) {
    const tl = gsap.timeline();
    const mask = modal.querySelector(MASK_CLASS);
    if (menuOpen) {
        if (mask) {
            tl.to(mask, {
                opacity: 0,
                duration: 0.2,
            });
        }
        tl.to(modal, {
            x: "100%",
            duration: ANIM_DURATION,
            ease: "power3.out",
        });
        tl.to(modal, {
            display: "none",
            duration: 0,
        });
    } else {
        tl.to(MOBILE_NAV, {
            display: "flex",
        });
        tl.fromTo(
            MOBILE_NAV,
            { x: "100%" },
            {
                x: "0%",
                duration: ANIM_DURATION,
                ease: "power3.out",
            }
        );
        if (mask) {
            tl.to(mask, {
                opacity: 0.5,
                duration: 0.2,
            });
        }
    }
    menuOpen = !menuOpen;
}
