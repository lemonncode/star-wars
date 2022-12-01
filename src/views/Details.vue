<template>
  <div>
    {{ details.birth_year }}
    {{ details.gender }}
    {{ details.heigh }}
    {{ details.mass }}
  </div>
</template>

<script>
export default{
  props: ["details"]
}
</script>
<style>
</style>