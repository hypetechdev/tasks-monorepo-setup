import { Base64 } from 'js-base64'

export enum KEYS {
    LOGIN_TIME = '__LOGIN_TIME__'
}

class Storage {
    save(key: KEYS, value: unknown): void {
        try {
            const encodedData = Base64.encode(JSON.stringify(value))
            localStorage.setItem(key, encodedData)
        } catch (error) {
            // Error saving data
            console.error('storage', error)
            localStorage.removeItem(key)
        }
    }

    load(key: KEYS): any {
        try {
            const data = window.localStorage.getItem(key)
            if (!data) {
                return null
            }

            // We have data!!
            const baseData = Base64.decode(data)
            return JSON.parse(baseData)
        } catch (error) {
            console.error('storage', error)
            localStorage.removeItem(key)
        }
    }

    remove(key: KEYS): void {
        try {
            localStorage.removeItem(key)
        } catch (error) {
            console.error('storage', error)
        }
    }

    clear(): void {
        localStorage.clear()
    }
}

export const myStorage = new Storage()
