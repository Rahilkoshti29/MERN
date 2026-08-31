import fs from "fs";

let products =
    "1. Laptop - 50000\n" +
    "2. Mobile - 20000\n" +
    "3. Keyboard - 1500\n" +
    "4. Mouse -  800\n" +
    "5. Headphones - 2500\n";

fs.writeFile("products.txt", products, function(err) {

    if (err) {
        console.log("Error creating file");
        return;
    }

    console.log("File created successfully");

    fs.access("products.txt", fs.constants.F_OK, function(err) {

        if (err) {
            console.log("File does not exist");
            return;
        }

        console.log("File exists");

        fs.readFile("products.txt", "utf8", function(err, data) {

            if (err) {
                console.log("Error reading file");
                return;
            }

            console.log("Products:");
            console.log(data);

            fs.appendFile(
                "products.txt",
                "6. Printer - 10000\n",
                function(err) {

                    if (err) {
                        console.log("Error appending");
                        return;
                    }

                    console.log("Product added successfully");

                }
            );
        });
    });
});


import fs from "fs";

// Create and write 5 products
fs.writeFile("products.txt",
    "Laptop - 50000\n" +
    "Mobile - 20000\n" +
    "Keyboard - 1500\n" +
    "Mouse - 800\n" +
    "Headphones - 2500\n",
    function(err) {

        if (err) {
            console.log("Error writing file");
            return;
        }

        console.log("File created successfully");

        // Check file
        fs.exists("products.txt", function(exists) {

            if (!exists) {
                console.log("File does not exist");
                return;
            }

            // Read file
            fs.readFile("products.txt", "utf8", function(err, data) {

                if (err) {
                    console.log("Error reading file");
                    return;
                }

                console.log("Products:");
                console.log(data);

                // Append new product
                fs.appendFile(
                    "products.txt",
                    "Printer - 10000\n",
                    function(err) {

                        if (err) {
                            console.log("Error appending");
                            return;
                        }

                        console.log("New product added");
                        

                    }
                );

            });

        });

    }
);
