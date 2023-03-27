<template>
  <div class="tab-pane fade active show">
    <h2 class="font-gilroy-bold">
      {{ $t('website_terms.title') }}
    </h2>
    <div class="update-date">
      {{ $t('website_terms.update') }}
    </div>
    <p>
      {{ $t('website_terms.context') }}
    </p>
    <p>
      <router-link to="/terms#terms">
        {{ $t('terms_and_conditions.title') }}
      </router-link>
    </p>
    <p>
      <router-link to="/terms#privacy">
        {{ $t('privacy.title') }}
      </router-link>
    </p>
  </div>
</template>
  
  <script>
  export default {
      name: 'WebsiteTerms'
  }
  </script>