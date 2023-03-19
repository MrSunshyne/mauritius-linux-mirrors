<script lang="ts">
    import type { MirrorDetail } from "../types/types";
    import { copy } from "svelte-copy";
    import ContentCopy from "~icons/mdi/content-copy";

    export let mirror: MirrorDetail;
</script>

<div
    class="flex flex-col py-4 px-6 items-center gap-6 bg-white/10 rounded-2xl backdrop-blur-sm"
>
    <div>
        <h2 class="text-2xl">{mirror.distro}</h2>
    </div>
    <div class="flex h-12">
        <img src={mirror.logo} alt="" class="block w-full h-full" />
    </div>
    <div class="flex w-full justify-between">
        <div class="flex gap-1 group">
            <a
                class="block font-bold  text-blue-500 hover:text-blue-400"
                href={mirror.http}
            >
                HTTP
            </a>
            <button
            class="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:transition-all text-gray-400 hover:text-white"
                use:copy={mirror.http}
                on:svelte-copy={(event) => alert(event.detail)}
            >
                <ContentCopy class="w-4" />
            </button>
        </div>

        <div class="flex gap-1 group">
            <button
            class="opacity-0 translate-x-2 group-hover:-translate-x-0 group-hover:opacity-100 group-hover:transition-all text-gray-400 hover:text-white"
            use:copy={mirror.https}
            on:svelte-copy={(event) => alert(event.detail)}
            >
            <ContentCopy class="w-4" />
        </button>
        <a
            class="block font-bold  text-green-500 hover:text-green-400"
            href={mirror.https}
        >
            HTTPS
        </a>
        </div>
    </div>
</div>
