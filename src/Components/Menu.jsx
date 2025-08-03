// Import React hooks and the MenuItem component
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

// Main Menu component that displays a list of menu items
const Menu = () => {
  // State to store the fetched menu items
  const [menuItems, setMenuItems] = useState([]);
  // State to track loading status
  const [loading, setLoading] = useState(true);

  // Effect hook to fetch menu data when component mounts
  useEffect(() => {
    // Fetch menu data from the API
    fetch('http://localhost:3000/menu')
      .then(res => res.json()) // Parse JSON response
      .then(data => {
        setMenuItems(data); // Update menu items state
        setLoading(false); // Set loading to false
      })
      .catch(error => {
        console.error("Failed to fetch menu:", error); // Log any errors
        setLoading(false); // Set loading to false even on error
      });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="menu bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main heading for the menu section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover our carefully crafted dishes made with the finest ingredients</p>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Conditional rendering based on loading state */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            <p className="text-gray-600 mt-4 text-lg">Loading our delicious menu...</p>
          </div>
        ) : (
          // Grid layout for menu items (1 column on mobile, 2 on tablet, 3 on desktop)
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map through menu items and render each as a MenuItem component */}
            {menuItems.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Export the Menu component as default
export default Menu;

