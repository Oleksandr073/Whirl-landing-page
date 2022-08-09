// services accordion
const accordionButtons = document.querySelectorAll('.services__button');

function setHeightAccordionWrapper() {
    const accordionContents = document.querySelectorAll('.services__text');
    const maxHeightContent =
        Math.max(...Array.from(accordionContents)
        .map(accordionContent => accordionContent.scrollHeight));

    const accordionWrapper = document.querySelector('.services__list');
    accordionWrapper.style.minHeight = accordionWrapper.scrollHeight + maxHeightContent + 5 + 'px';
}

setHeightAccordionWrapper();

function hideContent(button) {
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('title', 'Show content');
    button.nextElementSibling.setAttribute('aria-hidden', 'true');
}

function showContent(button) {
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('title', 'Hide content');
    button.nextElementSibling.setAttribute('aria-hidden', 'false');
}

accordionButtons.forEach((accordionButton, index) => {
    accordionButton.addEventListener('click', function () {
        accordionButtons.forEach(accordionButton => {
            accordionButton.nextElementSibling.style.height = '0px';
        })

        if (this.getAttribute('aria-expanded') == 'true') {
            hideContent(this);
            return;
        }

        accordionButtons.forEach(accordionButton => {
            hideContent(accordionButton);
        })

        showContent(this);
        
        const accordionContent = accordionButton.nextElementSibling;
        let activeContentHeight = accordionContent.scrollHeight;
        accordionContent.style.height = `${activeContentHeight}px`;
    })
});