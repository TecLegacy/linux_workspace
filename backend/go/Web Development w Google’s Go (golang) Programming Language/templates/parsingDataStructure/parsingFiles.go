package parsingdatastructure

import (
	"fmt"
	"io"
	"log"
	"os"
	"strings"
)

// Reading data from CLI
// copying into newfile.dampi
// parse it to standard output

func ParseCLI() {

	str := os.Args[1] //Read from command line

	newFile := fmt.Sprintf("%s.txt", str)

	nf, err := os.Create(newFile) //Create a new file
	if err != nil {
		log.Fatal("Error Creating File", err)
	}

	defer nf.Close() // Defer close file

	io.Copy(nf, strings.NewReader(str)) //Copy Data from command line into the new file
}
