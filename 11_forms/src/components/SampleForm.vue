<script lang="ts">
import RatingControl from './RatingControl.vue'

export default {
  components: { RatingControl },
  data() {
    return {
      name: '',
      age: null,
      referrer: 'google',
      gender: null,
      terms: false,
      source: [],
      rating: 'poor',
    }
  },
  methods: {
    submitForm() {
      const payload = {
        name: this.name,
        age: this.age,
        referrer: this.referrer,
        gender: this.gender,
        terms: this.terms,
        source: [...this.source],
        rating: this.rating,
      }
      console.log(payload)
    },
  },
}
</script>
<template>
  <div>sample form</div>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="name">Name</label>
      <input type="text" name="user-name" v-model="name" />
    </div>
    <div class="form-control">
      <label for="name">Age</label>
      <input type="number" name="age" v-model.number="age" />
    </div>
    <div class="form-control">
      <label for="name">Referrer</label>
      <select name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="facebook">Facebook</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div class="form-control">
      <label for="name">Gender</label>
      <div class="gender">
        <label for="male">
          Male
          <input type="radio" name="gender" value="male" id="male" v-model="gender" />
        </label>
        <label for="female">
          Female
          <input type="radio" name="gender" value="female" id="female" v-model="gender" />
        </label>
        <label for="other">
          Other
          <input type="radio" name="gender" value="other" id="other" v-model="gender" />
        </label>
      </div>
    </div>
    <div class="form-control">
      <label for="name">Source</label>
      <label for="newspaper">Newspaper</label>
      <input type="checkbox" name="source" v-model="source" value="newspaper" id="newspaper" />
      <label for="social">Social</label>
      <input type="checkbox" name="source" v-model="source" value="social" id="social" />
    </div>
    <div class="form-control">
      <label for="terms">I agree,Terms and Conditions</label>
      <input type="checkbox" name="age" v-model="terms" id="terms" />
    </div>
    <div class="form-control">
      <RatingControl v-model="rating" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<style>
label {
  display: block;
  margin-bottom: 5px;
}
input[type='text'],
input[type='number'],
select {
  display: block;
  margin-bottom: 10px;
  padding: 0.5rem 0.25rem;
  width: 100%;
}
.form-control {
  margin-bottom: 1rem;
}
button {
  margin-top: 10px;
  background-color: var(--vue-green);
  color: white;
  padding: 0.5rem 0.25rem;
  width: 100%;
  cursor: pointer;
}
.gender {
  display: flex;
  gap: 1rem;
}
label[for='terms'],
label[for='newspaper'],
label[for='social'] {
  display: inline;
}
input[type='checkbox'] {
  margin: 0rem 1rem;
  display: inline;
}
</style>
