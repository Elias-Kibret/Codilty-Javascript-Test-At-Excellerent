//Given  N bottels and K later of water ,
// Example
// N=5      1,2,3,4,5
// what is minimum bottle required to fill K amount of liquid

function sol(N, K) {
	if (N <= 0 || K <= 0) return -1;
	let count = 0;
	if ((N * (1 + N)) / 2 < K) return -1;
	if (K <= N) return 1;
	for (let i = N; i > 0; i--) {
		if (K == 0) break;
		if (K - i < i) {
			count = count + 2;
			break;
		} else {
			count = count + 1;
			K = K - i;
		}
	}
	return count;
}

console.log(sol(5, 6));
