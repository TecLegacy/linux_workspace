package parsingdatastructure

import (
	"log"
	"os"
	"text/template"
)

type person struct {
	Name  string
	Power string
}

func ParseStruct(tpl *template.Template) {

	n := os.Args[1]
	p := os.Args[2]
	p1 := person{
		n,
		p,
	}

	err := tpl.Execute(os.Stdout, p1)
	if err != nil {
		log.Fatal("Error printing output", err)
	}
}

func ParseSlice(tpl *template.Template) {
	sages := []string{
		"keshav",
		"khushi",
		"kanu",
	}

	err := tpl.Execute(os.Stdout, sages)
	if err != nil {
		log.Fatal("Error printing ", err)
	}
}
func ParseStructSlice(tpl *template.Template) {
	sages := []string{
		"keshav",
		"khushi",
		"kanu",
	}

	p1 := struct {
		Sage []string
	}{
		sages,
	}

	err := tpl.Execute(os.Stdout, p1)
	if err != nil {
		log.Fatal("Error printing ", err)
	}
}
