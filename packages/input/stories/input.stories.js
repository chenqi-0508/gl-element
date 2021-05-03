import GlInput from '..';

export default {
    title: 'GlInput',
    component: GlInput,
};

export const Text = () => ({
    components: {
        GlInput
    },
    template: "<gl-input v-model='value'></gl-input>",
    data() {
        return {
            value: '123'
        };
    },
});
export const Password = () => ({
    components: {
        GlInput
    },
    template: "<gl-input type='password' v-model='value'></gl-input>",
    data() {
        return {
            value: '123'
        };
    },
});