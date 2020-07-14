function towerOfHanoi(
  depth,
  source = 0,
  dest = 2,
  temp = 1,
  status = [Array.from(Array(depth),(_, i) => depth - i), [], []]
) {
  if (depth === 1) {
    console.log(`Moved ${source} to ${dest}`);
    status[dest].push(status[source].pop());
    console.log(status);
    return;
  }

  towerOfHanoi(depth - 1, source, temp, dest, status);
  towerOfHanoi(1, source, dest, temp, status);
  towerOfHanoi(depth - 1, temp, dest, source, status);
}

towerOfHanoi(3, 0, 2);
