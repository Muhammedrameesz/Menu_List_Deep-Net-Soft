const MenuItems = require("../menuItems.json");
const BrunchCockTails = require("../BrunchCoctails.json")

const getMenuItems = (req, res) => {
  try {
    
    const menuList = MenuItems;

    if (!menuList || menuList.length === 0) {
      console.log("Menu list is empty.");
      return res.status(200).json({ message: "No menu items available." });
    }

    return res.status(200).json(menuList);
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const BrunchCocktails = (req, res) => {
    try {
      
      const menuList = BrunchCockTails;
  
      if (!menuList || menuList.length === 0) {
        console.log("Menu list is empty.");
        return res.status(200).json({ message: "No menu items available." });
      }
  
      return res.status(200).json(menuList);
    } catch (error) {
      console.error("Error fetching menu items:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

module.exports = {getMenuItems,BrunchCocktails};
