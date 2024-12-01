class ConfigManager {
    settings: { [key: string]: string}

    constructor(){
        this.settings = {theme: "dark", language: "pt-br"}
    }

    getSetting(key: string) : string | undefined {
        return this.settings[key]
    }
}

const config1 = new ConfigManager()
const config2 = new ConfigManager()

config1.settings["theme"] = "light"
config1.settings["language"] = "en"


console.log(config1.getSetting("theme"), config1.getSetting("language"))
console.log(config2.getSetting("theme"), config2.getSetting("language"))