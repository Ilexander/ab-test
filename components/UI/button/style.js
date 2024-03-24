const styleType = 'var2';

const style = {
    var1: {
        bgColor: 'black',
        borderColor: 'black',
        textColor: 'white',
        hoverEffect: (val) => ({
            bgColor: 'futura-500',
            borderColor: val?.hoverEffect?.bgColor || 'futura-500',
            textColor: 'white',
        }),
    },
    var2: {
        bgColor: '[#FFFFFF]',
        borderColor: '[#FFFFFF]',
        textColor: '[#495EEE] font-bold',
        hoverEffect: (val) => ({
            bgColor: '[#6C89FF]',
            borderColor: val?.hoverEffect?.bgColor || '[#6C89FF]',
            textColor: 'white',
        }),
    },
};

export default style[styleType];
