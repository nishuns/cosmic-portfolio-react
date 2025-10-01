<template>
    <a class="pf-social-icon-component" :href="href" target="_blank">
        <component :is="iconComponent" />
    </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import {
    PhGithubLogo,
    PhLinkedinLogo,
    PhTwitterLogo,
    PhInstagramLogo,
    PhFacebookLogo,
    PhYoutubeLogo,
} from '@phosphor-icons/vue';

const props = defineProps<{
    icon: string;
    href: string;
}>();

const iconMap = {
    github: PhGithubLogo,
    linkedin: PhLinkedinLogo,
    twitter: PhTwitterLogo,
    instagram: PhInstagramLogo,
    facebook: PhFacebookLogo,
    youtube: PhYoutubeLogo,
};

const iconComponent = computed(() => {
    return iconMap[props.icon as keyof typeof iconMap] || PhGithubLogo;
});
</script>