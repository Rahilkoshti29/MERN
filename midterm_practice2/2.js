import fs from "fs"

// 5 lines
let notes =
    "Line 1: Learn NodeJS\n" +
    "Line 2: Learn ExpressJS\n" +
    "Line 3: Learn MongoDB\n" +
    "Line 4: Practice APIs\n" +
    "Line 5: Prepare for exam\n";

// Create and write file
fs.writeFile("notes.txt", notes, function(err) {

    if (err) {
        console.log("Error creating notes file");
        return;
    }

    console.log("notes.txt created successfully");

    // Read file
    fs.readFile("notes.txt", "utf8", function(err, data) {

        if (err) {
            console.log("Error reading notes file");
            return;
        }

        console.log("\nFile Contents:");
        console.log(data);

        // Append 2 lines
        let extra =
            "Line 6: Practice coding\n" +
            "Line 7: Revise questions\n";

        fs.appendFile("notes.txt", extra, function(err) {

            if (err) {
                console.log("Error appending data");
                return;
            }

            console.log("2 lines appended successfully");

            // Rename file
            fs.rename(
                "notes.txt",
                "my_notes12.txt",
                function(err) {

                    if (err) {
                        console.log("Error renaming file");
                        return;
                    }

                    console.log(
                        "File renamed to my_notes.txt successfully"
                    );
                }
            );
        });
    });
});

// import fs from "fs";

// // Create and write 5 lines
// fs.writeFile("notes.txt",
//     "Line 1\n" +
//     "Line 2\n" +
//     "Line 3\n" +
//     "Line 4\n" +
//     "Line 5\n",
//     function(err) {

//         if (err) {
//             console.log("Error writing file");
//             return;
//         }

//         console.log("File created");

//         // Read file
//         fs.readFile("notes.txt", "utf8", function(err, data) {

//             if (err) {
//                 console.log("Error reading file");
//                 return;
//             }

//             console.log("File contents:");
//             console.log(data);

//             // Append 2 lines
//             fs.appendFile(
//                 "notes.txt",
//                 "Line 6\nLine 7\n",
//                 function(err) {

//                     if (err) {
//                         console.log("Error appending");
//                         return;
//                     }

//                     console.log("2 lines added");

//                     // Rename file
//                     fs.rename(
//                         "notes.txt",
//                         "my_notes12.txt",
//                         function(err) {

//                             if (err) {
//                                 console.log("Error renaming file");
//                                 return;
//                             }

//                             console.log("File renamed successfully");

//                         }
//                     );

//                 }
//             );

//         });

//     }
// );