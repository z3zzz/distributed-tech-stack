export function cleanupQuery(columns: TemplateStringsArray, ...keys: string[]) {
  if (!columns[0]) {
    throw new Error('At least one column should be specified');
  }

  if (columns.length !== keys.length + 1) {
    throw new Error('Number of columns and keys should be equal');
  }

  let query = `
    DELETE FROM questions
    WHERE ${columns[0]} LIKE '%${keys[0]}%'
    `;

  for (const [i, v] of columns.entries()) {
    if (!i || !v) {
      continue;
    }

    query += `
    OR ${columns[i]} LIKE '%${keys[i]}%'
    `;
  }

  return query;
}
