<script lang="ts">
export default {
  props: {
    route: String,
    method: String,
    link: String,
  }
}
</script>

<template>
  <tr class="bg-gray-800 border-gray-700">
    <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap text-white">
      {{ route }}
    </th>
    <td class="py-4 px-6 uppercase">
      {{ method }}
    </td>
    <td class="py-4 px-6">
      <nuxt-link :href="link" target="_blank">
        View Route
        <i class="fa fa-external-link" />
      </nuxt-link>
    </td>
  </tr>
</template>
