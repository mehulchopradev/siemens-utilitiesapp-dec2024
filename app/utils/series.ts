export function generateFibonacciSeries(n: number): number[] {
  console.log('computing fibonacci series', n);
  const series: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
}