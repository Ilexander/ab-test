import IconLogo1 from '~/components/UI/icons/icon-logo-1.vue';
import IconLogo2 from '~/components/UI/icons/icon-logo-2.vue';

const styleType = 'var1';

const style = {
    var1: {
        header: {
            logo: IconLogo2
        }
    },
    var2: {
        header: {
            logo: IconLogo1
        }
    },
};

export default style[styleType];
