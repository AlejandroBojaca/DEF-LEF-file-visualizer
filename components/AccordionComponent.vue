<template>  
    <div class="accordion ">
        <div class="flex items-center cursor-pointer" @click="expanded = !expanded">
            <div class="px-4 py-2 bg-gray-800 text-white font-bold tracking-widest text-sm">Parent Button</div>
            <div :class="expanded ? 'rotate-180' : ''">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
        </div>
        <transition name="slide-fade">
            <div v-if="expanded" class="py-2 px-4 text-white font-bold tracking-widest">
                <button class="block p-2 bg-gray-800 hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Inner Button 1</button>
                <button class="block p-2 bg-gray-800 hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Inner Button 2</button>
                <button class="block p-2 bg-gray-800 hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Inner Button 3</button>
            </div>
        </transition>
    </div>  
</template> 
 
 
<script>
export default {
    data() {
        return {
            expanded: false
        }
    }
}
</script>
 
<style>
.slide-fade-enter-active {
    transition: all .5s ease;
}

.slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter {
    transform: translateY(-20px);
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

.rotate-180 {
    transform: rotate(180deg);
}
</style> 