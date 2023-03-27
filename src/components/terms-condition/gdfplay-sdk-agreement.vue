<template>
  <div class="tab-pane fade active show">
    <h2
      id="title"
      class="font-gilroy-bold"
    >
      {{ $t('sdk_terms.title') }}
    </h2>
    <div class="update-date">
      {{ $t("sdk_terms.update") }}
    </div>
    <p>{{ $t('sdk_terms.context') }}</p>

    <h3 id="agreement">
      1&nbsp;&nbsp;{{ $t('sdk_terms.agreement.title') }}
    </h3>
    <p>{{ $t('sdk_terms.agreement.context') }}</p>

    <h3 id="access">
      2&nbsp;&nbsp;{{ $t('sdk_terms.access.title') }}
    </h3>
    <p>{{ $t(`sdk_terms.access.context1`) }}</p>
    <p>{{ $t(`sdk_terms.access.context2`) }}</p>
    <!-- <p class="mb-0">
      {{ $t(`sdk_terms.access.context3`) }}
    </p>
    <ul class="list-item-circle">
      <li
        v-for="idx in 6"
        :key="idx"
        class="list-item-circle pb-0"
      >
        <p :class="idx<=5?'mb-0':''">
          {{ $t(`sdk_terms.access.item${idx}`) }}
        </p>
      </li>
    </ul> -->
    <p>{{ $t(`sdk_terms.access.context4`) }}</p>
    <p>{{ $t(`sdk_terms.access.context5`) }}</p>
    <p>{{ $t(`sdk_terms.access.context6`) }}</p>
    <p>{{ $t('sdk_terms.access.requirements_before') }} <a href="/developer/doc/sdk/get-started/installation#installation">{{ $t('menu.documentation') }}</a> {{ $t('sdk_terms.access.requirements_after') }}</p>

    <h3 id="charge-fee">
      3&nbsp;&nbsp;{{ $t('sdk_terms.charge_fee.title') }}
    </h3>
    <h4 class="mb-20">
      3.1&nbsp;{{ $t('sdk_terms.charge_fee.standard.title') }}
    </h4>
    <p>{{ $t('sdk_terms.charge_fee.standard.context1') }}</p>
    <p>{{ $t('sdk_terms.charge_fee.standard.context2') }}</p>
    <p>{{ $t('sdk_terms.charge_fee.standard.context3') }}</p>

    <h3 id="condition">
      4&nbsp;&nbsp;{{ $t('sdk_terms.condition.title') }}
    </h3>
    <h4 class="mb-20">
      4.1&nbsp;{{ $t('sdk_terms.condition.bug_fix.title') }}
    </h4>
    <p>{{ $t('sdk_terms.condition.bug_fix.context_before') }} <a href="/help/contact-us">{{ $t('menu.contact_us') }}</a>{{ $t('sdk_terms.condition.bug_fix.context_after') }}</p>
    <h4 class="mb-20">
      4.2&nbsp;{{ $t('sdk_terms.condition.obligation.title') }}
    </h4>
    <p>{{ $t('sdk_terms.condition.obligation.context') }}</p>
    <ul>
      <li class="list-item-circle">
        <p class="mb-0">
          {{ $t('sdk_terms.condition.obligation.item1') }}
        </p>
      </li>
      <li class="list-item-circle">
        <p>{{ $t('sdk_terms.condition.obligation.item2') }}</p>
      </li>
    </ul>
    <h4 class="mb-20">
      4.3&nbsp;{{ $t('sdk_terms.condition.confidentiality.title') }}
    </h4>
    <p
      v-for="idx in 4"
      :key="idx"
      :class="idx<3?'mb-0':''"
    >
      {{ $t(`sdk_terms.condition.confidentiality.context${idx}`) }}
    </p>
    <h4 class="mb-20">
      4.4&nbsp;{{ $t('sdk_terms.condition.data_category.title') }}
    </h4>
    <ul>
      <li
        class="list-item-circle"
      >
        <p class="mb-0">
          <strong>{{ $t(`sdk_terms.condition.data_category.account_data.title`) }}</strong>
        </p>
        <p>
          {{ $t(`sdk_terms.condition.data_category.account_data.context`) }}
        </p>
      </li>
      <li
        class="list-item-circle"
      >
        <p class="mb-0">
          <strong>{{ $t(`sdk_terms.condition.data_category.api_data.title`) }}</strong>
        </p>
        <p>
          {{ $t(`sdk_terms.condition.data_category.api_data.context`) }}
        </p>
      </li>
      <li
        class="list-item-circle"
      >
        <p class="mb-0">
          <strong>{{ $t(`sdk_terms.condition.data_category.network_data.title`) }}</strong>
        </p>
        <p>
          {{ $t(`sdk_terms.condition.data_category.network_data.context`) }}
        </p>
      </li>
      <li
        class="list-item-circle"
      >
        <p class="mb-0">
          <strong>{{ $t(`sdk_terms.condition.data_category.voluntary_data.title`) }}</strong>
        </p>
        <p>
          {{ $t(`sdk_terms.condition.data_category.voluntary_data.context`) }}
        </p>
      </li>
    </ul>
    <h5 class="mb-15">
      4.4.1&nbsp;{{ $t('sdk_terms.condition.data_category.special_category.title') }}
    </h5>
    <p>
      {{ $t('sdk_terms.condition.data_category.special_category.context') }}
    </p>
    <h5 class="mb-15">
      4.4.2&nbsp;{{ $t('sdk_terms.condition.data_category.frequency.title') }}
    </h5>
    <p>
      {{ $t('sdk_terms.condition.data_category.frequency.context') }}
    </p>
    <h5 class="mb-15">
      4.4.3&nbsp;{{ $t('sdk_terms.condition.data_category.character.title') }}
    </h5>
    <p>
      {{ $t('sdk_terms.condition.data_category.character.context') }}
    </p>
    <h5 class="mb-15">
      4.4.4&nbsp;{{ $t('sdk_terms.condition.data_category.duration.title') }}
    </h5>
    <p>
      {{ $t('sdk_terms.condition.data_category.duration.context') }}
    </p>
    <h4 class="mb-20">
      4.5&nbsp;{{ $t('sdk_terms.condition.data_protection.title') }}
    </h4>
    <p class="mb-0">
      <strong>{{ $t('sdk_terms.condition.data_protection.definitions.title') }}</strong>
    </p>
    <p>{{ $t('sdk_terms.condition.data_protection.definitions.context') }}</p>
    <p class="mb-0">
      <strong>{{ $t('sdk_terms.condition.data_protection.processing.title') }}</strong>
    </p>
    <p class="mb-0">
      {{ $t('sdk_terms.condition.data_protection.processing.context1') }}
    </p>
    <p>{{ $t('sdk_terms.condition.data_protection.processing.context2') }}</p>
    <p>{{ $t('sdk_terms.condition.data_protection.processing.context3') }}</p>
    <ul>
      <li
        v-for="idx in 5"
        :key="idx"
        class="list-item-circle"
      >
        <p :class="idx<=4?'mb-0':''">
          {{ $t(`sdk_terms.condition.data_protection.processing.item${idx}`) }}
        </p>
      </li>
    </ul>
    <h4 class="mb-20">
      4.6&nbsp;{{ $t('sdk_terms.condition.termination.title') }}
    </h4>
    <p>{{ $t('sdk_terms.condition.termination.context1') }}</p>
    <p>{{ $t('sdk_terms.condition.termination.context2') }}</p>

    <h3>5&nbsp;&nbsp;{{ $t('sdk_terms.liability.title') }}</h3>
    <p>{{ $t('sdk_terms.liability.context') }}</p>

    <h3>6&nbsp;&nbsp;{{ $t('sdk_terms.governing.title') }}</h3>
    <p>{{ $t('sdk_terms.governing.context') }}</p>
    
    <h3>7&nbsp;&nbsp;{{ $t('sdk_terms.severability.title') }}</h3>
    <p>{{ $t('sdk_terms.severability.context') }}</p>
  </div>
</template>

<script>

</script>