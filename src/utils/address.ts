export function shortenAddress(address: string): string {
    if (address) {
        return `${ address.substring(0, 4)}...${ address.substring(address.length - 4)}`
    } else {
        return null
    }
}
