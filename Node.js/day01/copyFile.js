const fs = requires('fs');

// 末日情况下, destination.txt将创建或覆盖
fs.copyFile('source.txt', 'destination.txt', (err) => {
    if (err) throw err;
    console.log();
});