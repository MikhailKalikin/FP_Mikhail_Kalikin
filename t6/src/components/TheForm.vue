<template>
  <form class="form" @submit.prevent="submit">
    <div class="input__container">
      <input type="text" class="form__input" placeholder="* Имя"
             v-model="formData.name" autocomplete="none"
             @input="inputTouched('name')" @blur="inputTouched('name')"
             :class="{danger: empty.name}"
      >
      <span class="danger-text" v-if="empty.name">Введите имя</span>
    </div>
    <div class="input__container">
      <input type="text" class="form__input" placeholder="* Фамилия"
             v-model="formData.surname" autocomplete="none"
             @input="inputTouched('surname')" @blur="inputTouched('surname')"
             :class="{danger: empty.surname}"
      >
      <span class="danger-text" v-if="empty.surname">Введите фамилию</span>
    </div>
    <div class="input__container">
      <input type="text" class="form__input" placeholder="* Email"
             v-model.trim="formData.email" autocomplete="none"
             @input="inputTouched('email')" @blur="inputTouched('email')"
             :class="{danger: empty.email}"
      >
      <span class="danger-text" v-if="empty.email">Введите email</span>
      <span class="danger-text" v-if="touchedEmail && !empty.email && !this.checkEmail">Введите корректный email</span>
    </div>
    <div class="input__container">
      <input data-tel-input type="text" class="form__input" placeholder="+X XXX XXX XX XX"
             v-model="formData.phone" autocomplete="none"
             :class="{danger: !this.checkPhone()}"
      >
      <span class="danger-text" v-if="!this.checkPhone()">Закончите ввод телефона</span>
    </div>
    <div class="input__container">
      <textarea class="form__input form__input-textarea" placeholder="* Сообщение"
                v-model="formData.message" autocomplete="none"
                @input="inputTouched('message')" @blur="inputTouched('message')"
                :class="{danger: empty.message}"
      ></textarea>
      <span class="danger-text" v-if="empty.message">Введите сообщение</span>
    </div>
    <button type="submit" class="form__btn" :disabled="disabled">Отправить</button>
  </form>
</template>

<script>
import mask_list from "@/libs/phoneMask/mask_list";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "TheForm",
  mixins: [mask_list],
  props: {
    style: Number
  },
  data() {
    return {
      selector: '[data-tel-input]',
      emailPattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      checkEmail: false,
      touchedEmail: false,
      phoneValid: true,
      matLen: 0,
      disabled: true,
      empty: {
        name: false,
        surname: false,
        email: false,
        message: false
      }
    }
  },
  updated() {
    this.enable()
  },
  mounted() {
    let inputs = document.querySelectorAll(this.selector)
    this.matLen = this.formData.phone.replace(/\s/g, "").length
    this.testEmail()
    inputs.forEach(input => {
      input.addEventListener('input', this.setMask)
      input.addEventListener('focus', this.setMask)
      input.addEventListener('blur', () => {
        if (input.value === '+') {
          this.formData.phone = ""
          input.value = ''
          this.matLen = 0
        }
        else
          this.setMask
      })
    });

  },
  methods: {
    ...mapMutations({
      setFormData: "formD/setFormData"
    }),

    setOrder() {
      return this.style ? `order: ${this.style}` : ""
    },
    inputTouched(field) {
      this.empty[field] = !this.formData[field];
      if (field === 'email') {
        this.testEmail()
        this.touchedEmail = true
      }
    },
    testEmail() {
      this.checkEmail = this.emailPattern.test(this.formData.email)
    },
    checkPhone() {
      return (this.formData.phone.replace(/\s/g, "").length === this.matLen ^ this.formData.phone !== "") ^ this.formData.phone !== ""
    },
    enable() {
      this.disabled = !this.formData.name || !this.formData.surname ||
          !this.formData.email || !this.formData.message || !this.checkEmail ||
          !(this.checkPhone())
    },

    setMask() {
      let matrix = '+###############'
      let selectorValue = document.querySelector('[data-tel-input]')
      this.maskList.forEach(item => {
        let code = item.code.replace(/[\s#]/g, ''),
            phone = selectorValue.value.replace(/[\s#-)(]/g, '');
        if (phone.includes(code)) {
          matrix = item.code
          this.matLen = matrix.replace(/\s/g, "").length
          this.phoneValid = phone.length === matrix.replace(/\s/g, "").length
        }
      });

      let i = 0,
          val = selectorValue.value.replace(/\D/g, '')

      selectorValue.value = matrix.replace(/(?!\+)./g, function(a) {
        return /[#\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
      })
      this.formData.phone = selectorValue.value
    },

    submit() {
      if (this.$cookies.get(`request:${this.formData.email}`))
        alert(`${this.$cookies.get(`request:${this.formData.email}`)}, ваше обращение обрабатывается!`)
      else {
        this.$cookies.set(`request:${this.formData.email}`, `${this.formData.name} ${this.formData.surname}`)
        alert(`${this.formData.name} ${this.formData.surname}, спасибо за обращение!`)
      }
      console.log(this.formData)
    }
  },
  computed: {
    ...mapState({
      formData: state => state.formD.formData
    }),
    ...mapGetters({
      getFormData: "formD/getFormData"
    })
  }
}
</script>

<style scoped>

.form {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
}

.input__container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.form__input {
  position: relative;
  width: 100%;
  font-size: 16px;
  height: 50px;
  padding: 12px 12px 12px 34px;
  border: 1px solid #6b6b6b;
  border-radius: 4px;
  transition: background-color .2s ease-in;
}

.danger {
  background-color: rgba(217, 146, 146, 0.3);
}

.danger-text {
  position: absolute;
  top: 58px;
  color: #4f0000;
}

.form__input-textarea {
  resize: none;
  outline: none;
  line-height: 27px;
}

.form__btn {
  height: 50px;
  text-align: center;
  font-weight: 700;
  padding: 12px;
  font-size: 17px;
  transition: all .2s ease-in;
  border: 1px solid #562194;
  border-radius: 4px;
  background-color: #eee0ff;
  align-self: flex-end;
}

.form__btn:disabled {
  filter: saturate(10%);
  cursor: not-allowed;
}

</style>