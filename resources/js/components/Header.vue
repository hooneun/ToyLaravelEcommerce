<template>
    <nav class="flex items-center justify-between flex-wrap p-6 bg-black">
        <div class="flex items-center text-white mr-6">
            <span class="text-xl tracking-tight">{{ title }}</span>
        </div>

        <div class="block lg:hidden">
            <button
                class="flex items-center px-3 py-2 border rounded text-white border-white"
            >
                <svg
                    class="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>

        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <a
                    href="#responsive-header"
                    class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
                >
                    MEN
                </a>
                <a
                    href="#responsive-header"
                    class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
                >
                    WOMEN
                </a>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    computed: {
        title() {
            console.log(process.env);
            return process.env.MIX_APP_NAME;
        }
    }
};
</script>
