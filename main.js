const { 
    ref, 
    computed, 
    createApp,
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
    onUnmounted
} = Vue;

const ArrList = {
    props: [
        'items'
    ],
    template: `
        <div v-for="item in arr">
            {{ item }}
        </div>
    `,
    setup (props) {
        const arr = computed(() => {
            return props.items.map(function (item) {
                return item * 2;
            });
        });

        return {
            arr
        }
    }
}

const Test = {
    template: `
        <div>привет</div>
    `,
    setup () {
        onMounted(() => {
            console.log('onMounted');
        });

        onBeforeMount(() => {
            console.log('onBeforeMount');
        });

        onBeforeUnmount(() => {
            console.log('onBeforeUnmount');
        });

        onUnmounted(() => {
            console.log('onUnmounted');
        });
    }
}

const TestInput = {
    template: `
        <input type="radio" v-model="inputRadioValue" value="1"/>
        <input type="radio" v-model="inputRadioValue" value="2"/>
        <input type="radio" v-model="inputRadioValue" value="3"/>
        <input type="radio" v-model="inputRadioValue" value="4"/>

        {{ inputRadioValue }}

        <hr>

        <input type="checkbox" v-model="inputCheckboxMultyValue" value="1"/>
        <input type="checkbox" v-model="inputCheckboxMultyValue" value="2"/>
        <input type="checkbox" v-model="inputCheckboxMultyValue" value="3"/>
        <input type="checkbox" v-model="inputCheckboxMultyValue" value="4"/>

        {{ inputCheckboxMultyValue }}

        <hr>

        <input type="checkbox" v-model="inputCheckboxValue"/>

        {{ inputCheckboxValue }}

        <hr>

        <input v-model="inputValue"/>
        <br>
        {{ inputValue }}

        <button @click="onClick">+</button>
    `,
    setup () {
        const inputValue = ref('123123');
        const inputCheckboxValue = ref(true);
        const inputCheckboxMultyValue = ref([1, 2]);
        const inputRadioValue = ref(2);

        function onClick () {
            inputValue.value = 'Привет';
        }

        return {
            inputValue,
            inputRadioValue,
            inputCheckboxValue,
            inputCheckboxMultyValue,
            onClick
        };
    }
}

const TestForm = {
    template: `
        <input v-model="formModel.name">
        <input type="number" v-model="formModel.age">

        <br>

        <input type="radio" v-model="formModel.gender" value="1">
        <input type="radio" v-model="formModel.gender" value="2">

        <br>

        <input type="date" v-model="formModel.date">

        <br>

        <button @click="onSumbit">
            Отправить
        </button>
    `,
    setup () {
        const formModel = ref({
            name: '',
            age: '',
            gender: '',
            date: ''
        });

        function onSumbit () {
            console.log(formModel.value);
        }

        return {
            formModel,
            onSumbit
        }
    }
}

const Root = {
    template: `
        <v-test-form/>

        <br>
        <br>
        <br>
        <br>

        <v-test-input/>

        <br>
        <br>
        <br>
        <br>

        <v-test v-if="isTestVisible"/>

        <button @click="onToggle">toggle</button>
        <br>
        <br>
        <br>
        <br>

        <div>
            Кол-во: {{ arr.length }}

            <hr>

            <v-arr-list :items="arr"/>

            <button @click="onClick">
                ++
            </button>
        </div>
    `,
    setup () {
        const isTestVisible = ref(false);
        const arr = ref([]);

        function onClick () {
            arr.value.push(arr.value.length + 1);
        }

        function onToggle () {
            isTestVisible.value = !isTestVisible.value;
        }

        return {
            isTestVisible,
            arr,
            onToggle,
            onClick
        }
    }
};

const app = createApp(Root);

app.component('VArrList', ArrList);
app.component('VTest', Test);
app.component('VTestInput', TestInput);
app.component('VTestForm', TestForm);

app.mount('#app');