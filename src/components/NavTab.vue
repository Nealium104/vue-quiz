<template>
    <a :href="url" :class="[position === 'left' && 'rounded-bl-xl',
    position === 'right' && 'rounded-br-xl',
    'bg-anki-gray-300 px-6 py-2 hover:border-2 border-black transition duration-300 hover:scale-110']">
        <slot />
    </a>
</template>

<script setup>
    const props = defineProps({
        url: {
            type: String,
            required: true
        },
        position: {
            type: String,
            default: 'center'
        }
    })
</script>