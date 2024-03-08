package main

import (
	// "log"
	// "os"
	"text/template"

	prs "github.com/teclegacy/templates/parsingDataStructure"
)

var tpl *template.Template

// Parsing Files single time for performance optimization
func init() {
	tpl = template.Must(template.ParseGlob("./views/*.gohtml"))
}

func main() {

	singleTpl := template.Must(template.ParseFiles("./views/parsingData.html"))

	// prs.ParseStruct(singleTpl)
	prs.ParseSlice(singleTpl)

	// prs.ParseCLI()
	// tpl, err := template.ParseFiles("/*.txt")
	// if err != nil {
	// 	log.Fatal("Error Parsing .text files", err)
	// }

	// err = tpl.Execute(os.Stdout, nil)

	// if err != nil {
	// 	log.Fatalln(err)
	// }

}
