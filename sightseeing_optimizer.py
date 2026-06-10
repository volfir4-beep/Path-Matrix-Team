# sightseeing_optimizer.py
import math
from itertools import permutations

def optimize_route(payload):
    # 1. Extract variables from the payload dictionary
    start = payload["start"]
    end = payload["end"]
    budget = payload["distance_budget"]
    threshold = payload["category_threshold"]
    locations = payload["locations"]
    matrix = payload["distance_matrix"]
    
    best_route = []
    max_score = 0.0
    
    # Get a list of just the location names (e.g., ["Fort", "Museum"])
    loc_names = list(locations.keys())
    
    # 2. Test all possible sequence lengths (visiting 1 place, 2 places, etc.)
    for r in range(1, len(loc_names) + 1):
        # Generate all possible orders for 'r' number of locations
        for sequence in permutations(loc_names, r):
            current_dist = 0.0
            current_score = 0.0
            valid_path = True
            category_counts = {}
            
            # Start at the College and go to the first stop in the sequence
            last_stop = start
            
            # 3. Travel through the generated sequence
            for stop in sequence:
                # Add travel distance from last stop to this stop
                travel_dist = matrix[last_stop][stop]
                current_dist += travel_dist
                
                # If we bust the budget, instantly stop checking this sequence
                if current_dist > budget:
                    valid_path = False
                    break
                    
                # Calculate Exponential Decay
                base_score = locations[stop]["score"]
                # math.exp is Python's way of doing e^(...)
                effective_score = base_score * math.exp(-0.1 * current_dist)
                
                # Check Category Penalties
                cat = locations[stop]["category"]
                category_counts[cat] = category_counts.get(cat, 0) + 1
                
                if category_counts[cat] > threshold:
                    effective_score *= 0.90 # Apply 10% penalty
                    
                current_score += effective_score
                last_stop = stop # Update our position
                
            # 4. Finally, add the distance to the final destination (Beach)
            if valid_path:
                current_dist += matrix[last_stop][end]
                if current_dist <= budget:
                    # If this valid route is the best we've seen, save it!
                    if current_score > max_score:
                        max_score = current_score
                        # Combine start, sequence, and end into one final list
                        best_route = [start] + list(sequence) + [end]

    # Return the final optimized data as a dictionary (JSON format)
    return {
        "optimal_route": best_route,
        "total_score": round(max_score, 2)
    }