<script setup lang="ts">
import { computed } from "vue";
import type { FieldProps } from "./interface";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const props = defineProps<FieldProps>();
const inputComponent = computed(() =>
	props.config?.component === "textarea" ? Textarea : Input,
);
</script>

<template>
  <FormField v-slot="slotProps" :name="fieldName">
    <FormItem v-bind="$attrs">
      <AutoFormLabel v-if="!config?.hideLabel" :required="required">
        {{ config?.label || beautifyObjectName(label ?? fieldName) }}
      </AutoFormLabel>
      <FormControl>
        <slot v-bind="slotProps">
          <component
            :is="inputComponent"
            type="text"
            v-bind="{ ...slotProps.componentField, ...config?.inputProps }"
            :disabled="disabled"
          />
        </slot>
      </FormControl>
      <FormDescription v-if="config?.description">
        {{ config.description }}
      </FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
