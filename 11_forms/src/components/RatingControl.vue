<script lang="ts">
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    activate(option: string) {
      this.$emit('update:modelValue', option)
    },
  },
}
</script>
<template>
  <p>RatingControl</p>
  <ul>
    <li>
      <button type="button" :class="{ active: modelValue === 'poor' }" @click="activate('poor')">
        Poor
      </button>
    </li>
    <li>
      <button
        type="button"
        :class="{ active: modelValue === 'average' }"
        @click="activate('average')"
      >
        Average
      </button>
    </li>
    <li>
      <button type="button" :class="{ active: modelValue === 'great' }" @click="activate('great')">
        Great
      </button>
    </li>
  </ul>
</template>
<style scoped>
.active {
  background-color: var(--vue-green-dark);
}
ul {
  display: flex;
  margin: 0;
  gap: 10px;
  list-style: none;
  padding: 0;
}
button {
  padding: 10px 20px;
  border: 0;
}
</style>
