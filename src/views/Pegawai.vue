<template>
    <div>
        <PegOP />
        <PegVW />
    </div>
</template>

<script>
import PegOP from "@/components/PEGOperation.vue";
import PegVW from "@/components/PEGView.vue";

export default {
    components: {
        PegOP,
        PegVW
    }
}
</script>