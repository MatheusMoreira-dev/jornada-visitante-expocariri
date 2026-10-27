function upperFirstLetter(str = "") {
  str = str
    .toLowerCase()
    .split(/\s+/)
    .map((w) => {
      if (w.match(/\b(de|da|do)s?\b/i)) return w;
      return w.charAt(0).toUpperCase() + w.slice(1);
    });

  return str.join(" ");
}

export { upperFirstLetter };
