[big o cheat sheet](http://bigocheatsheet.com/)
[big o pdf](http://web.mit.edu/16.070/www/lecture/big_o.pdf)
[dictionary of algorithims](https://xlinux.nist.gov/dads/)
When we use big-Θ notation, we're saying that we have an asymptotically tight bound on the running time.
"Asymptotically" because it matters for only large values of n.
"Tight bound" because we've nailed the running time to within a constant factor above and below.

Big O - uper bound
Big Theta Ω - lower bound
Big Omega Θ - tight bound

### Difference in O notations
Θ-notation (theta notation) is called tight-bound because it's more precise than O-notation and Ω-notation (omega notation).

If I were lazy, I could say that binary search on a sorted array is O(n2), O(n3), and O(2n), and I would be technically correct in every case. That's because O-notation only specifies an upper bound, and binary search is bounded on the high side by all of those functions, just not very closely. These lazy estimates would be useless.

Θ-notation solves this problem by combining O-notation and Ω-notation. If I say that binary search is Θ(log n), that gives you more precise information. It tells you that the algorithm is bounded on both sides by the given function, so it will never be significantly faster or slower than stated.

### more info
Big O is the upper bound, while Omega is the lower bound. Theta requires both Big O and Omega, so that's why it's referred to as a tight bound (it must be both the upper and lower bound).

For example, an algorithm taking Omega(n log n) takes at least n log n time, but has no upper limit. An algorithm taking Theta(n log n) is far preferential since it takes at least n log n (Omega n log n) and no more than n log n (Big O n log n).


#### Hypothetical Model Machine
A model of a machine that is used to 
