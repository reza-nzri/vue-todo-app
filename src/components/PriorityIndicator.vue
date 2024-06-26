<script setup lang="ts">

</script>

<template>
    <div>
        <div class="priority-indicator">
            <div class="inside-box">
                <p class="current-priority">high</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.priority-indicator {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
}

.inside-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
}

.current-priority {
    min-width: 80px;
    background-color: var(--well-read);
    height: 40px;
    color: white;
    font-size: 15px;
    text-align: center;
    align-content: center;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>