import GlFormItem from '..';

export default {
    title: 'GlFormItem',
    component: GlFormItem,
};

// export const FormItem = () => ({
//     components: {
//         GlFormItem
//     },
//     template: `
//         <div>
//             <label>{{ label }}</label>
//             <div>
//             <slot></slot>
//             <p v-if="errorMessage">{{ errorMessage }}</p>
//             </div>
//         </div>
//     `,
//     data() {
//         return {
//             errorMessage: "",
//         };
//     },
// });