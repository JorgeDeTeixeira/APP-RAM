const os = require("os");

setInterval(() => {
    const { arch, freemem, totalmem, platform } = os;
    const tRam = totalmem() / 1024 / 1024;
    const fRam = freemem() / 1024 / 1024;
    const porcentagem = (fRam / tRam) * 100;

    const stats = {
        SistemaOperacional: platform(),
        CPU: arch(),
        totalRam: `${parseInt(tRam)} MB`,
        livreRam: `${parseInt(fRam)} MB`,
        Status: `${porcentagem.toFixed(2)}%`,
    };

    console.clear();
    console.table(stats);
    exports.stats = stats;
}, 1200);
