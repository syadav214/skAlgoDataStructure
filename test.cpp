/* Compile with c++11
g++ -std=c++11 test.cpp
*/
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int chocolateFeast(int n, int c, int m)
{
    int count = n / c;
    int currentWrapper = count;

    while (currentWrapper >= m)
    {
        currentWrapper = currentWrapper - m;
        currentWrapper++;
        count++;
    }
    return count;
}

int main()
{
    int n, c, m;
    cin >> n;
    cin >> c;
    cin >> m;
    cout << "Ans: " << chocolateFeast(n, c, m) << endl;
    return 0;
}
