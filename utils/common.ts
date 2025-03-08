const hexToRGBA = (hex: string, alpha: number = 1): string => {
  let r = 0,
    g = 0,
    b = 0

  // Xử lý các định dạng màu khác nhau
  if (hex.length === 7) {
    // #RRGGBB
    r = parseInt(hex.slice(1, 3), 16)
    g = parseInt(hex.slice(3, 5), 16)
    b = parseInt(hex.slice(5, 7), 16)
  } else if (hex.length === 4) {
    // #RGB
    r = parseInt(hex[1] + hex[1], 16)
    g = parseInt(hex[2] + hex[2], 16)
    b = parseInt(hex[3] + hex[3], 16)
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export { hexToRGBA }
