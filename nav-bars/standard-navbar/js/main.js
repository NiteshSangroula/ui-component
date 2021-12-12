function select(element) {
    return document.querySelector(element);
}

const nsBars = select('.ns-bars');
const nsLinksCtr = select('.ns-links-ctr');

let userClicked = false;

nsBars.addEventListener('click', function() {
    if (userClicked) {
        userClicked = false;
        nsLinksCtr.classList.remove('ns-links-res-ctr');
    }
    else {
        nsLinksCtr.classList.add('ns-links-res-ctr');
        userClicked = true;
    }
});

function showFullSizedNav(largeSize) {
    if (!largeSize.matches && userClicked) {
        nsLinksCtr.classList.add('ns-links-res-ctr');
        userClicked = true;
    }
    else if(largeSize.matches){
        nsLinksCtr.classList.remove('ns-links-res-ctr');
    }
}

let largeSize = matchMedia("(min-width: 910px)");
showFullSizedNav(largeSize);
largeSize.addListener(showFullSizedNav);
