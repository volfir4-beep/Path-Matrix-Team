# test_cases.py

# Import the functions you wrote in the other files
from distance_utils import get_distance_matrix
from sightseeing_optimizer import optimize_route
from dynamic_router import insert_new_request

def run_tests():
    # 1. Grab your mock distance matrix
    matrix = get_distance_matrix()

    print("===============================================")
    print(" TESTING PART A: SIGHTSEEING ROUTE OPTIMIZER")
    print("===============================================")
    
    # 2. Simulate the JSON payload Palash's server will send you
    payload_a = {
        "start": "College",
        "end": "Beach",
        "distance_budget": 50,
        "category_threshold": 2,
        "locations": {
            "Fort": {"score": 10, "category": "Historical"},
            "Museum": {"score": 8, "category": "Historical"},
            "Temple": {"score": 7, "category": "Historical"}
        },
        "distance_matrix": matrix
    }

    # 3. Run your engine and print the output
    result_a = optimize_route(payload_a)
    print(f"Optimal Route Found: {result_a['optimal_route']}")
    print(f"Total Effective Score: {result_a['total_score']}")
    print("\n")


    print("===============================================")
    print(" TESTING PART B: DYNAMIC RIDE SHARING")
    print("===============================================")
    
    # 2. Simulate the payload for a new ride request
    # Note: Using the same locations from our matrix for simplicity
    payload_b = {
        "vehicle_capacity": 2,
        "current_route": ["College", "Museum", "Fort"], 
        "new_request": {
            "pickup": "Temple",
            "drop": "Beach",
            "base_distance": 28,  # The direct distance from Temple to Beach
            "flexibility_margin": 10
        },
        "distance_matrix": matrix
    }

    # 3. Run your insertion engine and print the output
    result_b = insert_new_request(payload_b)
    
    print(f"Status: {result_b['status']}")
    if result_b['status'] == "accepted":
        print(f"New Route Sequence: {result_b['new_route']}")
        print(f"Total Travel Distance: {result_b['total_dist']}")
    else:
        print(f"Reason: {result_b.get('reason')}")
        
    print("===============================================")

# This tells Python to run the tests when you execute this script
if __name__ == "__main__":
    run_tests()