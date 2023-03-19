<script lang="ts">
    import type { MirrorDetail } from "../types/types";
    export let mirror: MirrorDetail;
</script>

<div class="flex flex-col py-4 px-6 items-center gap-6 bg-white/10 rounded-2xl backdrop-blur-sm">
    <div>
        <h2 class="text-2xl">{mirror.distro}</h2>
    </div>
    <div class="flex h-12">
        <img src={mirror.logo} alt="" class="block w-full h-full">
    </div>
    <div class="flex w-full justify-between">
        <a class="block font-bold  text-blue-500 hover:text-blue-400" href={mirror.http}> HTTP </a>
        <a class="block font-bold text-green-500 hover:text-green-400" href={mirror.https}> HTTPS </a>
    </div>
</div>
