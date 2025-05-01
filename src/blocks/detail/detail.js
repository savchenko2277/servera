import { driveTabs } from "../../js/libs/driveTabs";

(() => {

    if(!document.querySelector('.detail__tabs')) return;

    const tabs = driveTabs({
        container: '.detail__tabs',
        controls: '.detail__nav button',
        selects: '.detail__tab',
        cls: 'active',
        onInit() {
            console.log(this);
        },
        onClick(i) {
            console.log(this, i);
        },
        onTab(set, i) {
            console.log(this, set, i);
        },
        onTick(i) {
            console.log(this, i);
        },
    });

})();
