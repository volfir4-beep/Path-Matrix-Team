# dynamic_router.py

def calculate_route_distance(route_list, matrix):
    """Helper function to calculate total distance of a route array."""
    dist = 0
    for i in range(len(route_list) - 1):
        dist += matrix[route_list[i]][route_list[i+1]]
    return dist

def insert_new_request(payload):
    route = payload["current_route"]         # e.g., ["S", "A", "B"]
    matrix = payload["distance_matrix"]
    req = payload["new_request"]             # e.g., {"pickup": "C", "drop": "D", "base": 6, "flex": 2}
    
    pickup = req["pickup"]
    drop = req["drop"]
    # Maximum allowed distance for this new rider
    max_allowed_dist = req["base_distance"] + req["flexibility_margin"]
    
    best_route = None
    min_dist = float('inf') # Set to infinity initially
    
    # 1. Try every possible insertion index for the pickup
    for i in range(1, len(route) + 1):
        # 2. Try every possible insertion index for the drop-off
        # (It must be AFTER the pickup, so j starts at i)
        for j in range(i, len(route) + 1):
            
            # Splice the Python list to create the new test route
            test_route = route[:i] + [pickup] + route[i:j] + [drop] + route[j:]
            
            # Calculate total distance of this new proposed route
            total_dist = calculate_route_distance(test_route, matrix)
            
            # 3. Check the Flexibility Margin Constraint
            # Find the distance between the newly inserted pickup and drop
            idx_pickup = test_route.index(pickup)
            idx_drop = test_route.index(drop)
            
            # Slice the list to get just the segment from pickup to drop
            rider_segment = test_route[idx_pickup : idx_drop + 1]
            rider_dist = calculate_route_distance(rider_segment, matrix)
            
            if rider_dist <= max_allowed_dist:
                # If valid and it's the shortest distance we've found, save it
                if total_dist < min_dist:
                    min_dist = total_dist
                    best_route = test_route
                    
    # Return the results
    if best_route:
        return {"status": "accepted", "new_route": best_route, "total_dist": min_dist}
    else:
        return {"status": "rejected", "reason": "Violates constraints"}