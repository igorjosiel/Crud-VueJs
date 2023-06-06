<template>
    <input
      class="input is-normal is-info"
      :type="type"
      :placeholder="placeholder"
      :max="max"
      :min="min"
      :v-model="value"
      required
    >
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputField',
  props: {
    type: {
      type: String,
      default: 'text',
      required: false,
    },
    placeholder: {
      type: String,
      default: '',
      required: true,
    },
    max: {
      type: Number,
      required: false,
    },
    min: {
      type: Number,
      required: false,
    },
    value: {
      type: String,
      required: true
    }
  },
});
</script>
