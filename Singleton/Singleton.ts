class ConfigManagerSingleton {

    private static instance: ConfigManagerSingleton
    private settings: { [key: string]: string }

    private constructor() {
        this.settings = { theme: "dark", language: "pt-br" }
    }

    // Método estático para obter a única instância
    public static getInstance(): ConfigManagerSingleton {
        if (!ConfigManagerSingleton.instance) {
            ConfigManagerSingleton.instance = new ConfigManagerSingleton()
        }
        return ConfigManagerSingleton.instance
    }

    // Método para obter configurações
    public getSetting(key: string): string | undefined {
        return this.settings[key]
    }

    // Método para alterar configurações
    public setSetting(key: string, value: string): void {
        this.settings[key] = value
    }
}

    const config3 = ConfigManagerSingleton.getInstance()
    const config4 = ConfigManagerSingleton.getInstance()


    config3.setSetting("theme", "light")
    config3.setSetting("language", "en")


    console.log(config3.getSetting("theme"), config3.getSetting("language"))
    console.log(config4.getSetting("theme"), config3.getSetting("language"))
