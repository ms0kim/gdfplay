<template>
  <div class="tab-pane fade active show">
    <h2 class="font-gilroy-bold">
      {{ $t('privacy.title') }}
    </h2>
    <div class="update-date">
      {{ $t("privacy.update") }}
    </div>
    <p>{{ $t('privacy.p1') }}</p>
    <p>{{ $t('privacy.p2') }}</p>
    <h3>{{ $t('privacy.article1.title') }}</h3>
    <h5 class="mb-15">
      {{ $t('privacy.article1.strong1') }}
    </h5>
    <p
      v-for="index1 in 6"
      :key="index1"
    >
      {{ $t(`privacy.article1.p${index1}`) }}
    </p>
    
    <h3>{{ $t('privacy.article2.title') }}</h3>
    <p
      v-for="index2 in 18"
      :key="index2"
    >
      {{ $t(`privacy.article2.p${index2}`) }}
    </p>

    <h3>{{ $t('privacy.article3.title') }}</h3>
    <p
      v-for="index3 in 7"
      :key="index3"
    >
      {{ $t(`privacy.article3.p${index3}`) }}
    </p>

    <h3>{{ $t('privacy.article4.title') }}</h3>
    <p
      v-for="index4 in 8"
      :key="index4"
    >
      {{ $t(`privacy.article4.p${index4}`) }}
    </p>

    <h3>{{ $t('privacy.article5.title') }}</h3>
    <p
      v-for="index5 in 6"
      :key="index5"
    >
      {{ $t(`privacy.article5.p${index5}`) }}
    </p>

    <h3>{{ $t('privacy.article6.title') }}</h3>
    <h5 class="mb-15">
      {{ $t('privacy.article6.strong1') }}
    </h5>
    <p
      v-for="index6 in 11"
      :key="index6"
    >
      {{ $t(`privacy.article6.p${index6}`) }}
    </p>

    <h3>{{ $t('privacy.article7.title') }}</h3>
    <p
      v-for="index7 in 5"
      :key="index7"
    >
      {{ $t(`privacy.article7.p${index7}`) }}
    </p>

    <h3>{{ $t('privacy.article8.title') }}</h3>
    <p
      v-for="index8 in 7"
      :key="index8"
    >
      {{ $t(`privacy.article8.p${index8}`) }}
    </p>

    <h3>{{ $t('privacy.article9.title') }}</h3>
    <h5 class="mb-15">
      {{ $t('privacy.article9.strong1') }}
    </h5>
    <h5 class="mb-15">
      {{ $t('privacy.article9.strong2') }}
    </h5>
    <p
      v-for="index9 in 4"
      :key="index9"
    >
      {{ $t(`privacy.article9.p${index9}`) }}
    </p>

    <h3>{{ $t('privacy.article10.title') }}</h3>
    <p
      v-for="index10 in 7"
      :key="index10"
    >
      {{ $t(`privacy.article10.p${index10}`) }}
    </p>
    <h3>{{ $t('privacy.article11.title') }}</h3>
    <p>
      {{ $t(`privacy.article11.p1`) }}
    </p>
  </div>
</template>

<script>
export default {
    name: 'PrivacyPolicy'
}
</script>