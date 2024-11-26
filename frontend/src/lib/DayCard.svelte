<script lang="ts">
    import type {Day} from "../types/types"
    import img1 from "../assets/icon1.svg"
    import img2 from "../assets/icon2.svg"
    import img3 from "../assets/icon3.svg"

    export let day: Day

    function handleClick(): void {
        if (!day.clicked) {
            day = {...day, clicked: true}
        }
    }

    const icons: Record<string, string> = {
        candy: img3,
        snowflake: img2,
        tree: img1,
    }

    function handleKeydown(event: KeyboardEvent): void {
        if (event.key === "Enter" || event.key === " ") {
            handleClick()
        }
    }
</script>

<div
    class="card"
    class:clicked={day.clicked}
    role="button"
    tabindex="0"
    on:click={handleClick}
    on:keydown={handleKeydown}
>
    {#if day.clicked}
        <div class="clicked-content">
            <img src={day.image} alt={day.text} class="advent-image" />
            <p class="surprise-text">{day.text}</p>
        </div>
    {:else}
        <div class="content">
            <span class="letter">{day.letter || ""}</span>
            <span class="number">{day.id}</span>
            {#if day.icon}
                <span class="icon">
                    <img src={icons[day.icon]} alt={day.icon} />
                </span>
            {/if}
        </div>
    {/if}
</div>

<style>
    .card {
        position: relative;
        background: #9b2919;
        color: white;
        border: 3px dashed hsl(41, 69%, 87%);
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height: 160px;
        width: 160px;
        cursor: pointer;
        overflow: hidden;
        transition: background 0.5s;
        padding: 8px;
    }

    .card:hover {
        background: #6e1d13; 
    }

    .clicked {
        pointer-events: none;
        background: #6e1d13; 
    }

    .content {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .letter {
        font-size: 9rem;
        font-weight: bold;
        position: absolute;
        top: -4px;
        line-height: 1;
        transition: transform 0.5s ease-in-out;
        color: hsl(44 78% 94% / 1);
    }

    .card:hover .letter {
        transform: translateX(-50%);
    }

    .icon img {
        width: 65%;
        transition: transform 0.5s ease-in-out;
    }

    .card:hover .icon img {
        transform: translateX(-50%);
    }

    .number {
        font-size: 1.5rem;
        font-weight: normal;
        position: absolute;
        bottom: 8px;
        right: 8px;
        color: #f9f3cf;
        transition: font-size 0.3s ease-in-out;
    }

    .card:hover .number {
        font-size: 4rem;
    }

    .clicked-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .advent-image {
        width: 80%;
        margin-bottom: 0.5rem;
    }

    @media (max-width: 1100px) {
        .card {
            height: 100px;
            width: 100px;
        }

        .letter {
            font-size: 5rem;
        }

        .number {
            font-size: 1rem;
        }

        .card:hover .number {
            font-size: 2rem;
        }
        .surprise-text {
            font-size: 0.6rem;
        }

        .advent-image {
            margin-bottom: 0.2rem;
        }
    }
</style>
