for (let i = 1, count = 0; i <= 100; i++) {
    if (i % 2 === 0) continue;

    console.log(i);

    count++;

    if (count === 5) break;
}
