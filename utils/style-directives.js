const styleType = 'var1';

const globalStyles = {
    var1: {
        class: 'learn',
    },
    var2: {
        class: 'smart',
    },
};

const previewStyles = {
    var1: {
        subtitle: {
            html: 'Get a <span><span>Planet</span>Learn</span> plan to rock self-learning',
        },
    },
    var2: {
        subtitle: {
            html: 'Get a <span><span>Smart</span>Study</span> plan to rock self-learning',
        },
    },
};

const buttonStyles = {
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

export const global = globalStyles[styleType];
export const preview = previewStyles[styleType];
export const button = buttonStyles[styleType];
