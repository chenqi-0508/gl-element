import GlButton from '../';

export default {
    title: 'GlButton',
    component: GlButton,
};

export const LoginButton = () => ({
    components: {
        GlButton
    },
    template: `<gl-button type="primary">登录</gl-button>`,
});