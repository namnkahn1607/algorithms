/* 246a. asteroid collision */
// @: 2 pointers + dp
#include <iostream>
#include <vector>
using namespace std;

class A {
public:
    const vector<int> asteroidCollision(vector<int> astr) {
        int i = -1;
        
        for (int &a : astr) {
            while (i >= 0 and a < 0 && astr[i] > 0) {
                const int diff = astr[i] + a;

                if (diff > 0) { a == 0; break; }
                if (diff == 0) { a = 0; --i; break; }

                --i;
            }

            if (a != 0) {
                astr[++i] = a;
            }
        }

        return astr.resize(i + 1);
    }
}

int main() {
    // add asteroids
    int n; cin >> n;
    vector<int> astr(n);

    for (int i = 0; i < n; ++i) {
        cin >> astr[i];
    }

    // asteroids after collision
    const vector<int> ans = new A()->asteroidCollision(astr);

    for (const int& x : ans) {
        cout << x << ' '; 
    }

    return 0;
}