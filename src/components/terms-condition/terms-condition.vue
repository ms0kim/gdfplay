<template>
  <div class="tab-pane fade active show">
    <h2 class="font-gilroy-bold">
      {{ $t('terms_and_conditions.title') }}
    </h2>
    <div class="update-date">
      {{ $t('terms_and_conditions.update') }}
    </div>
    <p>{{ $t('terms_and_conditions.context') }}</p>
    <div
      v-for="idx in 13"
      :key="idx"
    >
      <h4 class="mb-15">
        {{ $t(`terms_and_conditions.article${idx}.title`) }}
      </h4>
      <p>{{ $t(`terms_and_conditions.article${idx}.context`) }}</p>
    </div>
  </div>
</template>
  
  <script>
  export default {
      name: 'TernsCondition'
  }
  </script>