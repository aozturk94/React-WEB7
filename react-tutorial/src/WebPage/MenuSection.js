import React from 'react'

function MenuSection() {

  let Menu = [
    {Name:"Bread Basket", Ingredient:"Assortment of fresh baked fruit breads and muffins", Price:"₺"+5.50},
    {Name:"Honey Almond Granola with Fruits", Ingredient:"Natural cereal of honey toasted oats, raisins, almonds and dates", Price:"₺"+7.0},
    {Name:"Belgian Waffle", Ingredient:"Vanilla flavored batter with malted flour", Price:"₺"+7.50},
    {Name:"Scrambled Eggs", Ingredient:"Scrambled eggs, roasted red pepper and garlic, with green onions", Price:"₺"+7.50},
    {Name:"Blueberry Pancakes", Ingredient:"With syrup, butter and lots of berries", Price:"₺"+8.50}
  ]
  return (
    <>
      {/* Menu Section */}
      <div className="w3-row w3-padding-64" id="menu">
        <div className="w3-col l6 w3-padding-large">
          <h1 className="w3-center">Our Menu</h1>
          <br />
          {Menu.map((item)=> <>
            <h4>{item.Name}</h4>
            <p className="w3-text-grey">
            {item.Ingredient}, {item.Price}
          </p>
          <br/>
          </> 
          )}


        </div>
        <div className="w3-col l6 w3-padding-large">
          <img
            src="https://www.w3schools.com/w3images/tablesetting.jpg"
            className="w3-round w3-image w3-opacity-min"
            alt="Menu"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <hr />
    </>
  )
}

export default MenuSection