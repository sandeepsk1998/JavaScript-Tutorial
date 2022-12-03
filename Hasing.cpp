#include <iostream>
#include <unordered_set>
using namespace std;
 
/*int int nums[], int n)
{
 int count =0;
   for(int i=0;i<n;i++)
   {
   		if(nums[i]!=nums[i+1])
   		 count++;
	   
   }
   
   return count;
}
*/

int distict(int nums[],int n)
{
	unordered_set<int> set;
	for(int i=0; i<n; i++)
	{
		set.insert(nums[i]);
	}
	
	return set.size();
}
int main()
{
    int nums[] = { 8, 1, 2, 6, 8, 10 };
 
    int n = sizeof(nums)/sizeof(nums[0]);
 
   int p= distict(nums, n);
   cout<<p;
 
    return 0;
}