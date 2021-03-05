import { defineComponent,reactive,ref } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import { auth } from '@/service';

export default defineComponent({
    components: {
      UserOutlined,
    },
    setup() {
    // const account = ref('');

      const regForm = reactive({
        account:'',
        password:'',
      });

const register = () => {
  auth.register(regForm.account,regForm.password);
};

      return {
        regForm,

        register,
      };
    },
});