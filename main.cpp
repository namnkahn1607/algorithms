/* 1584. min cost to connect points */
// @: prim 

#include <iostream>
#include <algorithm>
#include <vector>
#include <functional>
#include <cmath>
#include <queue>
using namespace std;

class A {
public:
    int minCostConnectPoints(vector<vector<int>> points) {
        function<int(int, int)> distance = [&](int i, int j) -> int {
            return abs(points[i][0] - points[j][0]) +
                abs(points[i][1] - points[j][1]);
        };

        const int N = points.size();
        vector<bool> visited(N, false); 
        int cost = 0;

        using Edge = pair<int, int>; 
        priority_queue<Edge, vector<Edge>, greater<Edge>> minPQ;
        minPQ.push({0, 0});

        while (!minPQ.empty()) {
            Edge currEdge = minPQ.top(); minPQ.pop();

            const int dist = currEdge.first;
            const int i = currEdge.second;

            if (visited[i]) continue;

            cost += dist;
            
            visited[i] = true;

            for (int j = 0; j < N; ++j) {
                if (!visited[j]) {
                    minPQ.push({distance(i, j), j});
                }
            }
        }

        return cost;
    }
};

int main() {
    // add points
    int n; cin >> n;
    vector<vector<int>> points;
    int x, y;

    for (int i = 0; i < n; ++i) {
        cin >> x >> y;
        points.push_back({x, y});
    }

    // min cost to connect all points
    A* solution = new A();
    cout << solution->minCostConnectPoints(points) << endl;
    delete solution;

    return 0;
}