'use strict';
/*import getAdditionalKeys from '../../helpers/additional_keys';*/

class Navigation {
    constructor (container) {

        this.themeSwitch  = container.querySelector('.submenu__theme');
        this.modeSwitch   = container.querySelector('.submenu__mode');
        this.histSwitch   = container.querySelector('.submenu__hist');
        this.histClear    = container.querySelector('.history__clear');
        this.calAddKeys   = container.querySelector('.calculator__additional-keys-block');
        this.mode = 'simple';
        this.theme = 'dark';
    };

    changeMode (container) {

        if (this.mode  == 'simple') {
            container = getAdditionalKeys(this.mode);
            this.mode  = 'ing';
            //вызвать калькулятор в инженерном моде
        } else {

            this.calAddKeys.innerHTML = getAdditionalKeys(this.mode);
            this.mode  = 'simple';
            //вызвать калькулятор в простом моде

        };
    };
    changeTheme (container) {

        if (this.theme  == 'dark') {
            container.classList.add('calculator--theme-light')
            this.theme  = 'light'
        } else {
            container.classList.remove('calculator--theme-light')
            this.theme  = 'dark'
        };
    };
};

export default Navigation;
