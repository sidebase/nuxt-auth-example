<template>
  <div class="max-w-5xl mx-auto mt-5 px-5">
    <div class="overflow-x-auto relative rounded">
      <table class="w-full text-sm text-left text-gray-400">
        <thead class="text-xs uppercase bg-gray-700 text-gray-400">
        <tr>
          <th scope="col" class="py-3 px-6">
            Route
          </th>
          <th scope="col" class="py-3 px-6">
            Method
          </th>
          <th scope="col" class="py-3 px-6">
            Link
          </th>
        </tr>
        </thead>
        <tbody>
          <APITableRow
              route="/session"
              method="get"
              link="/api/auth/session"
          />
          <APITableRow
              route="/csrf"
              method="get"
              link="/api/auth/csrf"
          />
          <APITableRow
              route="/providers"
              method="get"
              link="/api/auth/providers"
          />
          <APITableRow
            route="/signin"
            method="get"
            link="/api/auth/signin"
          />
          <APITableRow
              route="/signin/:provider"
              method="post"
              link="/api/auth/signin/github"
          />
          <APITableRow
              route="/callback/:provider"
              method="get & post"
              link="/api/auth/callback/github"
          />
          <APITableRow
              route="/signout"
              method="get & post"
              link="/api/auth/signout"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ auth: false })
</script>
