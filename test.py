def divisibleSumPairs(n, k, ar):
	pairs = 0
	for i in range(n):
		for j in range(i+1,n):
			if (i < j) and ((ar[i]+ar[j]) % k == 0):
				pairs +=1
			
	print pairs

if __name__ == "__main__":
	n = 6
	k = 3
	ar = [1, 3 ,2, 6 ,1 ,2]
	divisibleSumPairs(n, k, ar)