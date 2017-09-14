
#	This program is to find k largest elements in an array. 

ary = [12,5,787,1,23]; 
k = 5; 
largestAry = [0] * k;

def getIndex(val):
	for x in xrange(0, len(largestAry)):
		if val > largestAry[x]:
			return x; 



for x in xrange(0, len(ary)):
	idx = getIndex(ary[x]); 
	
	if idx != None:
		largestAry[idx:idx] = [ary[x]]; 
		largestAry[k:] = []
