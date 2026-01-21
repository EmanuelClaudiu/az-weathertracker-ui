<script>
    import { env } from '$env/dynamic/private';

    let userInput = "";
    let jsonResult = "";

    async function handleLog() {
        const baseUrl = env.PUBLIC_AZ_WEATHERTRACKER_API_BASE_URL || "";

        try {
            // 1. Perform the fetch
            const response = await fetch(`${baseUrl}/Weather/${userInput}`);
            
            // 2. Parse the JSON
            const data = await response.json();
            
            // 3. Convert JSON object to a pretty string for printing
            jsonResult = JSON.stringify(data, null, 2);
            
        } catch (error) {
            jsonResult = "Error fetching weather data";
        }
        
        userInput = "";
    }
</script>

<main>
    <div class="container">
        <h2>Check Weather</h2>
        
        <input 
            type="text" 
            bind:value={userInput} 
            placeholder="City" 
        />
        
        <button on:click={handleLog}>
            Check
        </button>

        {#if jsonResult}
            <h3>Returned JSON:</h3>
            <pre>{jsonResult}</pre>
        {/if}
    </div>
</main>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem;
        font-family: sans-serif;
    }

    input {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 250px;
    }

    button {
        padding: 0.5rem 1rem;
        background-color: #ff3e00;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #cc3200;
    }
</style>