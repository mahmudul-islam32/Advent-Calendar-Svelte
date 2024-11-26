<script lang="ts">
    import DayCard from "./DayCard.svelte"
    import type {Day} from "../types/types"

    const days: Day[] = Array.from({length: 24}, (_, i) => ({
        id: i + 1,
        text: `Day ${i + 1} - ${getRandomText()}`,
        image: `https://picsum.photos/200?text=Day+${i + 1}`,
        clicked: false,
        icon: [22, 23, 24].includes(i + 1)
            ? ["candy", "snowflake", "tree"][[22, 23, 24].indexOf(i + 1)]
            : null,
        letter: i < 5 ? "MERRY"[i] : i < 15 ? "CHRISTMAS"[i - 6] : null,
    }))
    function getRandomText(): string {
        const texts = [
            "Surprise!",
            "Enjoy!",
            "Greetings!",
            "Joy!",
            "Peace!",
            "Wishes!",
            "Cheer!",
            "Celebrate!",
        ]
        const randomIndex = Math.floor(Math.random() * texts.length)
        return texts[randomIndex]
    }
</script>

<div class="calendar">
    {#each days as day}
        <DayCard {day} />
    {/each}
</div>

<style>
    .calendar {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 1rem;
        padding: 2rem;
        max-width: 1400px;
        margin: 0 auto;
    }

    @media (max-width: 600px) {
        .calendar {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
            padding: 1rem;
        }
    }
</style>
