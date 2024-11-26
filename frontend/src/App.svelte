<script>
    import Calendar from "./lib/Calendar.svelte"
</script>

<main>
    <Calendar />
    {#each Array(35) as _, i}
        <div
            class="snowflake"
            style="--i: {i}; --size: {Math.random() * 5 +
                1}px; --speed: {Math.random() * 5 +
                10}s; --delay: {Math.random() * 10}s; --left: {Math.random() *
                100}vw;"
        ></div>
    {/each}
</main>

<style>
    main {
        min-height: 100vh;
        background: #006400;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .snowflake {
        position: absolute;
        top: -10%;
        left: var(--left, 50vw);
        width: var(--size, 5px);
        height: var(--size, 5px);
        background-color: white;
        border-radius: 50%;
        opacity: 0.8;
        animation: fall var(--speed, 10s) linear infinite; 
        animation-delay: var(--delay, 0s); 
    }

    @keyframes fall {
        0% {
            transform: translateY(-10vh); 
        }
        100% {
            transform: translateY(110vh);
        }
    }
</style>
