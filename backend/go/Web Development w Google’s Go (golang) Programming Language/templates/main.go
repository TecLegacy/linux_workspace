package main

import (
	"fmt"
	"io"
	"log"
	"os"
	"strings"
	"text/template"
)

var tpl *template.Template

// Parsing Files single time for performance optimization
func init() {
	tpl = template.Must(template.ParseGlob("./views/*.gohtml"))
}

func main() {

	nf, err := os.Create("index.html")
	if err != nil {
		log.Fatal("Error creating file", err)
	}
	defer nf.Close()

	err = tpl.ExecuteTemplate(nf, "templ.gohtml", nil)
	if err != nil {
		log.Fatalln(err)
	}

	// Printing to Standard out
	tpl, err := template.ParseFiles("./views/file2.txt")
	if err != nil {
		log.Fatal("Error Parsing file", err)
	}

	err = tpl.Execute(os.Stdout, nil)
	if err != nil {
		log.Fatalln(err)
	}

	//Reading data from CLI and copying into new file2
	str := os.Args[1]
	newFile := fmt.Sprintf("%s.html", str)

	nf2, err := os.Create(newFile)
	if err != nil {
		log.Fatal("Error Creating File", err)
	}

	io.Copy(nf2, strings.NewReader(str))

	tpl, err = template.ParseFiles("./views/file3.html")
	if err != nil {
		log.Fatal("Error Parsing file", err)
	}

	err = tpl.Execute(nf2, nil)

	if err != nil {
		log.Fatalln(err)
	}

}
