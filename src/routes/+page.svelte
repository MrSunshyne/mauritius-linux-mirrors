<script lang="ts">
  import AdminCard from "../components/admin-card.svelte";
  import MirrrorCard from "../components/mirrror-card.svelte";

  export let data;
</script>

<div class="flex flex-col gap-10 items-center justify-center text-center">
  <h1 class="font-bold">Mauritius Linux Mirrors</h1>

  <div>
    {#each data.mirrors as mirror}
      <MirrrorCard {mirror} />
    {/each}
  </div>

  <div>
    <h2 class="font-semibold">Authors</h2>
    {#each data.meta.admins as admin}
      <AdminCard {admin} />
    {/each}
  </div>
</div>
