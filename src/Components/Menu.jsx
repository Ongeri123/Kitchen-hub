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
    console.log('Fetching menu data...');
    // Fetch menu data from the API
    fetch('http://localhost:3000/menuItems')
      .then(res => {
        console.log('Response status:', res.status);
        return res.json();
      }) // Parse JSON response
      .then(data => {
        console.log('Received data:', data);
        console.log('Data length:', data.length);
        setMenuItems(data); // Update menu items state
        setLoading(false); // Set loading to false
      })
      .catch(error => {
        console.error("Failed to fetch menu:", error); // Log any errors
        setLoading(false); // Set loading to false even on error
      });
  }, []); // Empty dependency array means this runs once on mount

  console.log('Rendering Menu component. Loading:', loading, 'Items count:', menuItems.length);
  
  return (
    <div className="menu container mx-auto py-10">
      {/* Main heading for the menu section */}
      <h2 className="text-3xl font-bold mb-6 text-center">Our Menu</h2>
      {/* Debug info */}
      <p className="text-center text-sm text-gray-500">Debug: Loading={loading.toString()}, Items={menuItems.length}</p>
      {/* Conditional rendering based on loading state */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : menuItems.length === 0 ? (
        <p className="text-center">No menu items found</p>
      ) : (
        // Grid layout for menu items (1 column on mobile, 3 on medium+ screens)
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Map through menu items and render each as a MenuItem component */}
          {menuItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

// Export the Menu component as default
export default Menu;

