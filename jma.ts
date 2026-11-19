// JMA Bosai earthquake feed parser — polls the official JMA JSON, no API key
// https://www.jma.go.jp/bosai/quake/data/list.json
export async function fetchJmaQuakes() {
  const res = await fetch('https://www.jma.go.jp/bosai/quake/data/list.json');
  const quakes = await res.json();
  return quakes
    .filter((q: any) => q.mag >= 4.0)
    .slice(0, 10)
    .map((q: any) => ({
      time: q.at,
      epicenter: q.anm,
      magnitude: q.mag,
      maxIntensity: q.maxi,
      tsunami: q.ttl || 'none',
      source: 'JMA',
      fetchedAt: new Date().toISOString(),
    }));
}
