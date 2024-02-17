export default function Result({ results }) {
  const colNameList = Object.keys(results[0]);
  return (
    <section>
      <table id="result">
        <thead>
          {colNameList.map((colName) => (
            <th key={colName}>{colName}</th>
          ))}
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result[colNameList[0]]}>
              {colNameList.map((colName) => (
                <td key={colName}>{result[colName]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
