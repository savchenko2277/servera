import { tweakerSelect } from "../../js/libs/tweakerSelect";
import enquire from 'enquire.js';
import scrollLock from 'scroll-lock';

(() => {

    const filtersBody = document.querySelector('.catalog__filters');
    const filters = filtersBody?.querySelectorAll('.catalog__filter');
    const mobileFiltersBody = document.querySelector('.catalog__filters-mobile');

    document.querySelectorAll('.catalog__select').forEach(el => new tweakerSelect(el));

    enquire.register("screen and (max-width: 1100px)", {
        match: () => {
            filters?.forEach(filter => {
                mobileFiltersBody.appendChild(filter);
            });
        },
        unmatch: () => {
            filters?.forEach(filter => {
                filtersBody.appendChild(filter);
            });
        },
    })

    document.querySelector('.catalog__open')?.addEventListener('click', () => {
        if(mobileFiltersBody.classList.contains('show')) {
            closeModalFilters();
        } else {
            openModalFilters();
        }
    })

    document.querySelector('.catalog__filters-close')?.addEventListener('click', () => {
        closeModalFilters();
    })

    document.addEventListener('click', (e) => {
        if (!mobileFiltersBody?.contains(e.target) && mobileFiltersBody?.classList.contains('show') && e.target !== document.querySelector('.catalog__open')) {
            closeModalFilters();
        }
    })

    const openModalFilters = () => {
        document.querySelector('.catalog__open').classList.add('active');
        document.querySelector('.catalog__nav').classList.add('overlay');

        scrollLock.disablePageScroll();
        mobileFiltersBody.classList.add('show');
    }

    const closeModalFilters = () => {
        document.querySelector('.catalog__open').classList.remove('active');
        document.querySelector('.catalog__nav').classList.remove('overlay');

        scrollLock.enablePageScroll();
        mobileFiltersBody.classList.remove('show');
    }

})();
