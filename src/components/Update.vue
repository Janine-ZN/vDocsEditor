<template>
<div class="editor-demo">
    <Editor v-model="html" />
    <div v-html="html"></div>
</div>
</template>

<script>
import Editor from '@/components/Editor';

export default {
    components: { Editor },
    data() {
        return {
            html: '封装 TinyMCE 为组件 RichText',
        };
    }
};
</script>

<style lang="scss">

</style>