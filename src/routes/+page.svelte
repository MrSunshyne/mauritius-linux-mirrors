<script lang="ts">
  import AdminCard from "../components/admin-card.svelte";
  import Footer from "../components/footer.svelte";
  import MirrrorCard from "../components/mirrror-card.svelte";

  export let data;
</script>

<svelte:head>
  <title>Mauritius Linux Mirrors</title>
</svelte:head>

<div class="flex flex-col gap-10 container mx-auto px-4 text-white content-container">
  <h1 class="font-bold text-3xl text-center md:text-left md:text-5xl">Linux Mirrors in Mauritius</h1>

  <div class="mirrors gap-2 font-mono">
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

  <Footer />
</div>


<style>
  .mirrors {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
  }
</style>