<script lang="ts">
    import type { MirrorDetail } from "../types/types";
    export let mirror: MirrorDetail;
</script>

<div class="flex gap-4">
    <div class="w-[100px]">
        <h2>{mirror.distro}</h2>
    </div>
    <a href={mirror.http}> HTTP </a>
    <a href={mirror.https}> HTTPS </a>
</div>
