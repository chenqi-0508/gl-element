import GlForm from '../';
import GlFormItem from '../../formitem';
import GlInput from '../../input';
import GlButton from '../../button';

export default {
    title: 'GlForm',
    component: GlForm,
};

export const Login = () => ({
    components: {
        GlForm,
        GlFormItem,
        GlInput,
        GlButton
    },
    template: `
        <gl-form class="form" ref="form" :model="user" :rules="rules">
            <gl-form-item label="用户名" prop="username">
            <!-- <gl-input v-model="user.name"></gl-input> -->
            <gl-input
                :value="user.username"
                @input="user.username = $event"
                placeholder="请输入用户名"
            ></gl-input>
            </gl-form-item>
            <gl-form-item label="密码" prop="password">
            <!-- <gl-input type="password" v-model="user.password" placeholder="请输入密码"></gl-input> -->
            <gl-input
                type="password"
                :value="user.password"
                @input="user.password = $event"
                placeholder="请输入密码"
            ></gl-input>
            </gl-form-item>
            <gl-form-item>
            <gl-button type="primary" @click="login">登录</gl-button>
            </gl-form-item>
        </gl-form>
    `,
    data() {
        return {
            user: {
                username: "123",
                password: "2",
            },
            rules: {
                username: [{
                    required: true,
                    message: "请输入用户名",
                }, ],
                password: [{
                        required: true,
                        message: "请输入密码",
                    },
                    {
                        min: 3,
                        max: 6,
                        message: "请输入3-6位密码",
                    },
                ],
            },
        };
    },
    methods: {
        login() {
            //   const formItems = this.$refs["form"].$children;
            //   formItems.forEach((item) => {
            //     if (item.$options.name === "GlFormItem") {
            //       item.validate();
            //     }
            //   });

            this.$refs.form.validate(valid => {
                if (valid) {
                    alert('验证成功')
                } else {
                    alert('验证失败')
                    return false
                }
            })
        }
    },
});