try {
    if (Math.random()>=.5) {
        undefined();
    }
    console.log("try to get here");
} catch (e) {
    console.log("catch", e.message);
} finally {
    console.log("finally run even if");
}