
export default function encript(texto) {
    let shift = 2
    return texto.substring(shift) + texto.substring(0, shift);
}