export const workingWithStorage = {
    getStorageItem(item: string): string | null {
        return localStorage.getItem(item);
    },

    setStorageItem(item: string, data: string): void {
        localStorage.setItem(item, data);
    },

    clearStorage(): void {
        localStorage.clear();
    },
}