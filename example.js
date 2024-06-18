//U4888-2664
//Implement a function to load data from a CSV file named purchase_orders.csv
//When I tried to use the local files I got a CORS error
//I was unsure of any other way around the error,
//Here's hoping this solution is valid:
function loadData() {
  d3.csv(
    "https://raw.githubusercontent.com/DiSchmitt/Coding-Challenge-10/main/data/purchase_orders.csv"
  )
    .then(function (data) {
      //After loading the data, dynamically create and append an <li> element
      //for each purchase order within an <ul> in the body of your HTML document.
      const ul = d3.select("#orderInfo");
      const items = ul
        .selectAll("li")
        .data(data)
        .enter()
        .append("li")
        //Each list item should display the format: "Customer Name - Order ID: Purchase Amount".
        //Format is somewhat unclear but I'll do my best by using
        //The letter of the format if not the spirit
        .text(function (d) {
          return (
            d["customerName"] +
            " - " +
            d["orderId"] +
            ": " +
            "$" +
            d["purchaseAmount"]
          );
        });
    })
    .catch(function (error) {
      console.log("Error loading the data: " + error.message);
    });
}
//It seems that task 4 is just check your work which I did and the code works