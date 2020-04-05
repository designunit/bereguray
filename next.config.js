module.exports = {
    env: {
        YANDEX_METRIKA: 61650523,
    },
    webpack(config) {
        config.resolve.modules.push(__dirname)
        return config;
    },
}